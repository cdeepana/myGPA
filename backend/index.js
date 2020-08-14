require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose'); 
const session = require('express-session')
const bodyParser = require('body-parser');
const  passport  =  require('passport');
const jwt = require('jsonwebtoken')
// const initializePassport = require('./Controllers/auth/passport-configurations/passport-config')
// initializePassport()
const routeApi = require('./API_routes');


const app = express();

mongoose.Promise = global.Promise;  
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());


mongoose.connect('mongodb://localhost:27017/mygpa',{ useNewUrlParser: true,  useUnifiedTopology: true  });

mongoose.connection.once('open' ,()=> {
      console.log("connection was established");
}).on('error', (error01)=> {
    console.log(`can not connect database`, error01);
});



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    // res.header("Access-Control-Allow-Origin", "http://192.168.1.102:4200");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept","Authorization");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });

  routeApi(app);



app.listen(5000, ()=> {
    console.log("gpa backend listening");
});