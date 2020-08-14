
const jwt = require('jsonwebtoken')


function LoginController(req,res) {
        const token = jwt.sign({email: req.body.email}, process.env.refresh_token_secret,{expiresIn: '1h'});
        console.log("type of token back end ", typeof(token),token);
        console.log("\n",req.body)
                res.status(200).send({token: token, UserID: req.body.UserID, isDplus: req.body.isDplus}
                );
    }
module.exports = LoginController;