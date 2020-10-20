
const jwt = require('jsonwebtoken');
const { findOne } = require('../../model/Users');
const User = require('../../model/Users')
const bcrypt = require('bcrypt')


function RegisterController(req,res) {

        if(req.method == 'POST'){

        
        const newUser = new User();

        newUser.username = req.body.username
        newUser.email = req.body.email
        newUser.password = req.body.password


        User.findOne({email:req.body.email}).then(
                x=>{
                        if(!x){
                                bcrypt.genSalt(4, (err,salt) => {
                                        if(err) return err;
                                        
                                        bcrypt.hash(newUser.password, salt, (err, hash)=>{
                                            if(err) return err;
                                            newUser.password = hash;
                                
                                
                                            newUser.save().then(data=>{
                                                // console.log("saved user data 4=>",data, "data._id", data._id);
                                                const token = jwt.sign({ email: data.email }, process.env.refresh_token_secret,{expiresIn: '1h'})
                                                
                                                return res.status(201).send({UserID: data._id,token: token})
                                        }).catch(err => {
                                                console.log("user creation fail",err);
                                                return res.status(404).send({errormsg: 'User creation failed'+ err})
                                        });
                                        });
                                    });
                        }
                        else{
                                return res.status(406).send({errormsg: 'User email already exists'})
                        }
                }
        ).catch((error)=>{
                console.log(error);
                return res.status(404).send({errormsg: 'user registration error server error'})
        })

        }

        else if(req.method == 'GET'){
                
                User.findById({_id:req.query.UserID},('email username')).then(
                        
                        x=>{
                                return res.status(200).send({data: x})
                        }
                ).catch(
                        error =>{
                                console.log("User.findById({_id:req.query.UserID},('email username')) ERROR",error)
                                return res.status(404).send('user not found')
                        }
                )       
        }
      
    }
module.exports = RegisterController;