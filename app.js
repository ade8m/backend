// 
const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const stuffRoutes = require('./Routes/stuff');




mongoose.connect('mongodb+srv://Adem:JSPROJECT@cluster0.i3ddt3r.mongodb.net/?retryWrites=true&w=majority').then(()=>{
  console.log("connection successfully");
})
.catch((error)=>{
  console.log("unable to coonect to mongoDB");
  console.log(error);
});


app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  app.use(bodyParser.json());
  app.use('/api/stuff',stuffRoutes);


module.exports = app;