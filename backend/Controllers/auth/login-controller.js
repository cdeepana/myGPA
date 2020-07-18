
const jwt = require('jsonwebtoken')


function LoginController(req,res) {
        const token = jwt.sign({ id: req.username, name: "chathura" }, process.env.refresh_token_secret);
        console.log("type of token back end ", typeof(token),token);
                res.status(200).send({token: token}
                );
    }
module.exports = LoginController;