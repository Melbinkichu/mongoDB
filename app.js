const express = require ('express');
const morgan = require('morgan');
const db = require('./mongodb');
const studentRoute = require('./Routes/studentRoutes')
const app = express();
app.use(morgan('dev'));
app.use('/api',studentRoute)
//app.use(express.json());
//const PORT = process.env.PORT;

app.listen(3005,()=>{
    console.log("listenting to port 3005");
})