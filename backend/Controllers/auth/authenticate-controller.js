
const jwt = require('jsonwebtoken')


function AutheticationController(req,res) {
        console.log("token authentication",req.headers);
        // console.log("tokenArray =>",req.headers['authorization']);
        // var jwttoken = req.headers['authorization'];
        // TokenArray = jwttoken.split(" ");
        // console.log("TokenArray",TokenArray);

        // Token = TokenArray[1]
        // console.log("token    ....=>",Token);
        // var decoded = jwt.verify(Token,process.env.refresh_token_secret);
        //             console.log(decoded);
        res.json({auth:true});
    }



    
module.exports = AutheticationController;