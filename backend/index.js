const express = require('express');
// const bodyParser = require('body-parser');

const app = express();

// app.use(bodyParser.json());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/getData', (req,res)=>{
    console.log("called ");
    res.status(200).send({hello: "workddfsdfsf"});
})

app.listen(5000, ()=> {
    console.log("gpa backend listening");
});