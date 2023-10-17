const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const {mongoose} = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser');


//Database connection
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('Database Connected'))
.catch((err)=> console.log('Database Not connected', err));

//middleware
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))



app.use('/', require('./routes/authRoute'))

const port = 8000;
app.listen(port, ()=> console.log(`Server running on port ${port}`))