const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();


//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//simple api test
app.get('/', (req, res)=>{
    res.json({
        message:"API pos system live"
    })
})


//routes import
const userRoute = require('./routes/userRoute')
app.use('/api', userRoute)

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log('Server is running on port: ' + PORT)
})