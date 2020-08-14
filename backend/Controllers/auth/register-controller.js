
const jwt = require('jsonwebtoken')
const User = require('../../model/Users')


function RegisterController(req,res) {
        const newUser = new User();

        newUser.username = req.body.username
        newUser.email = req.body.email
        newUser.password = req.body.password

        console.log("registeere ==>", req.body);

        newUser.save().then(data=>{
                console.log("saved user data 4=>",data);
        const token = jwt.sign({ email: data.email }, process.env.refresh_token_secret,{expiresIn: '1h'})
        // console.log("type of token back end ", typeof(token),token);
                return res.status(201).send({UserID: data. _id,token: token})
        //         );
        // return res.json({msg: "OK"});

                // return res.status(201).json({msg: 'user created'});
        }).catch(err => {
                return res.status(404).send({errormsg: 'User creation failed'+ err})
        });
      
    }
module.exports = RegisterController;