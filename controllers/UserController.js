const UserModel = require('../models/User')
const bcrypt = require('bcrypt');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dzqhnuroo',
    api_key: '434622187235975',
    api_secret: 'Q5hut4Hs9Xth4FtfghjpwG4T3Sw'
});

class UserController {

    static getalluser = async (req, res) => {
        try {
            const users = await UserModel.find()
            // console.log(user)
            res.status(201).json({
                status: 'success',
                message: 'successfull',
                users,
              })
            // res.send('hello user')
        } catch (error) {
            console.log(error);
        }
    }

    
    static userinsert = async (req, res) => {
        try{
            // console.log(req.body);
            const { name, email, password, confirmpassword} = req.body
        const image = req.files.image
        //  console.log(image)
        const imageupload = await cloudinary.uploader.upload(image.tempFilePath, {
            folder: 'profileimageapi'
        })
        //console.log(imageupload)

        const user = await UserModel.findOne({ email: email })
        // console.log(user)
        if (user) {
            res
                .status(401)
                .json({ status: "failed", message: "ᴛʜɪꜱ ᴇᴍᴀɪʟ ɪꜱ ᴀʟʀᴇᴀᴅʏ ᴇxɪᴛꜱ😓" });
        } else {
            if (name && email && password && confirmpassword) {
                if (password == confirmpassword) {
                    try {
                        const hashpassword = await bcrypt.hash(password, 10);
                        //console.log(hashpassword);
                        const result = new UserModel({
                            name: name,
                            email: email,
                            password: hashpassword,
                            image: {
                                public_id: imageupload.public_id,
                                url: imageupload.secure_url,
                            },
                        })
                        await result.save()
                        res.status(201).json({
                            status: "success",
                            message: "Registration Successfully 😃🍻",
                        });
                    } catch (error) {
                        console.log(error)
                    }
                } else {
                    res
                        .status(401)
                        .json({ status: "failed", message: "password & confirmpassword does not match" });
                }
            } else {
                res
                    .status(401)
                    .json({ status: "failed", message: "all field required" });
            }
        }
        }catch(error){
            console.log(error);
        }
        
    }
}

module.exports = UserController