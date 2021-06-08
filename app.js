const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
var articatRoute= require('./Routes/atricalRoute')
var authorRoute= require ('./Routes/authorRoute')


const app= express();



app.use(cors());
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());



app.use('/api' , articatRoute);
app.use('/api' , authorRoute);

app.get('/' , (req , res)=>{
    res.send("Welcome In Home...........");
})

app.listen(3000);

module.exports = app;