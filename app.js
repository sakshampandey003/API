const express = require ('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config({path:'./.env'})
const web = require('./routes/web')
const connectdb = require('./db/connectdb')
const fileUpload = require("express-fileupload");
const cors = require('cors')


app.use(cors()) // for api communication in react
// for file upload
app.use(fileUpload({useTempFiles: true}));

// for get data in api
app.use(express.json())

connectdb()


// load route
app.use('/api',web)
// localhost:4000/api











// Server create
app.listen(process.env.PORT,()=>{
    console.log(`server running on localhost: ${process.env.PORT}`)
})