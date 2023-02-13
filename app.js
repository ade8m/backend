// mongodb+srv://Adem:JSPROJECT@cluster0.i3ddt3r.mongodb.net/?retryWrites=true&w=majority
const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Thing = require('./models/thing');




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
app.post('/api/stuff',(req,res,next)=>{
    const thing = new Thing({
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      price: req.body.price,
      userId: req.body.userId
    });
    thing.save().then(()=>{
      res.status(201).json({
        message: 'post saved successfully!'
      });
    })
      .catch((error)=> {
        res.status(400).json({
          error:error
        });
      })
    
});
app.get('/api/stuff/:id', (req, res, next) => {
  Thing.findOne({
    _id: req.params.id
  }).then(
    (thing) => {
      res.status(200).json(thing);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
});
app.get('/api/stuff',(req, res,next) => {
    Thing.find().then(
      (things) =>{
        res.status(200).json(things);
      }
    ).catch(
      (error) =>{
        res.status(400).json({
          error: error
        });
       
      });
    
   
 });
 


module.exports = app;