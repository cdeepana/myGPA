require('dotenv').config();
const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser');
const  passport  =  require('passport');
const jwt = require('jsonwebtoken')
const initializePassport = require('./Controllers/auth/passport-configurations/passport-config')
initializePassport()
const routeApi = require('./API_routes');


const app = express();

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept","Authorization");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });

  routeApi(app);

// const auth = () => {
//     console.log("login const")
//     return (req, res, next) => {
//         passport.authenticate('login', (error, user, info) => {
//             if(error) res.status(400).json({"statusCode" : 200 ,"message" : error});
//             req.login(user, function(error) {
//                 if (error) return next(error);
//                 next();
//             });
//         })(req, res, next);
//     }
// }

// app.post('/login', auth() , (req, res) => {
//     const token = jwt.sign({ id: req.username, name: "chathura" }, process.env.refresh_token_secret);
//     // console.log("type of token back end ", typeof(token),token);
//             res.status(200).send({token: token}
//             );
// });


const authenticate = () =>{
    return (req,res,next)=>{
        passport.authenticate('authenticate', {session:false},(err,user,info)=>{
            // if (err) return next(err);
            if (err) console.log("err->",err);
            
            console.log("user->",user);
            console.log("info->",info);
                next();
        })(req,res.next);

    }
}

app.get('/test',authenticate(),(req,res) =>{
    // console.log("token authentication",req.headers);
    res.json({"OK":"OK"});
});




app.listen(5000, ()=> {
    console.log("gpa backend listening");
});