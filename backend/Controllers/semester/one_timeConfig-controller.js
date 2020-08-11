
const jwt = require('jsonwebtoken')
const one_timeConfig = require('../../model/onetimeConfig')


function one_timeConfigController(req,res) {
        const newConfig = new one_timeConfig();
        // newConfig.username = req.body.username
        // newConfig.email = req.body.email
        // newConfig.password = req.body.password
        // array ={A_plus: 1, A: 25}
        console.log("dplus",req.body[0].Ctrl_D_plus);
        newConfig.userID = req.body[2].UserID
        newConfig.A_plus = req.body[0].Ctrl_A_plus
        newConfig.A = req.body[0].Ctrl_A
        newConfig.A_minus = req.body[0].Ctrl_A_minus
        newConfig.B_plus = req.body[0].Ctrl_B_plus
        newConfig.B = req.body[0].Ctrl_B
        newConfig.B_minus = req.body[0].Ctrl_B_minus
        newConfig.C_plus = req.body[0].Ctrl_C_plus
        newConfig.C = req.body[0].Ctrl_C
        newConfig.C_minus = req.body[0].Ctrl_C_minus
        newConfig.D_plus = req.body[0].Ctrl_D_plus ? req.body[0].Ctrl_D_plus : 0
        newConfig.D = req.body[0].Ctrl_D
        newConfig.I = req.body[0].Ctrl_I
        newConfig.F = req.body[0].Ctrl_F

        newConfig.class_F_min = req.body[1].Ctrl_FirstMin
        newConfig.class_SU_min = req.body[1].Ctrl_SecondUpperMin
        newConfig.class_SU_max = req.body[1].Ctrl_SecondUpperMax
        newConfig.class_SL_min = req.body[1].Ctrl_SecondLowerMin
        newConfig.class_SL_max = req.body[1].Ctrl_SecondLowerMax
        newConfig.class_pass_min = req.body[1].Ctrl_PassMin
        newConfig.class_pass_max = req.body[1].Ctrl_PassMax

        console.log("newConfig type",typeof(newConfig._id),newConfig._id, "newConfig",newConfig);
        
        one_timeConfig.findOne({userID:req.body[2].UserID}).then(
                
               x=>{
                console.log("one time", !!x)
                       if(!x){
                        newConfig.save().then(data =>{
                                console.log("data =>",data)
                        return res.json({msg: "OK"});
                
                        }).catch(err => {
                                return res.status(404).send({errormsg: 'one time config failed'+ err})
                        })  
                       }
                       else{
                               console.log("findone xxx",typeof(JSON.stringify(x._id)));
                        newConfig._id = x._id;
                        console.log("newConfig 2 type",typeof(newConfig._id),newConfig._id, "newConfig", newConfig);
                        // newConfig.save().then(data =>{
                        //         console.log("data =>",data)
                        // return res.json({msg: "OK"});
                
                        // }).catch(err => {
                        //         return res.status(404).send({errormsg: 'one time config failed'+ err})
                        // })
                        newConfig.save().then(data =>{
                                console.log("data =>",data)
                        return res.json({msg: "OK"});
                
                        }).catch(err => {
                                return res.status(404).send({errormsg: 'one time config failed'+ err})
                        })

                       }
               }
        )
        

        console.log("one time data ==>", req.body)

        // newConfig.save().then(data =>{
        //         console.log("data =>",data)
        // return res.json({msg: "OK"});

        // }).catch(err => {
        //         return res.status(404).send({errormsg: 'one time config failed'+ err})
        // })







        // newConfig.save().then(data=>{
        //         console.log("saved user data=>",data);
        // const token = jwt.sign({ email: data.email }, process.env.refresh_token_secret,{expiresIn: '1h'})
        // // console.log("type of token back end ", typeof(token),token);
        //         return res.status(201).send({msg: 'user created',token: token})
        // //         );

        //         // return res.status(201).json({msg: 'user created'});
        // }).catch(err => {
        //         return res.status(404).send({errormsg: 'User creation failed'+ err})
        // });
      
    }
module.exports = one_timeConfigController;