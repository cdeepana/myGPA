
const jwt = require('jsonwebtoken')
const one_timeConfig = require('../../model/onetimeConfig')


function one_timeConfigController(req,res) {
        
        if(req.method == 'POST'){
                var newConfig = new one_timeConfig();

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

   
        one_timeConfig.findOne({userID:req.body[2].UserID}).then(
                
               x=>{
                console.log("one time", x)
                       if(!x){
                        newConfig.save().then(data =>{
                                console.log("data =>",data)
                        return res.json({msg: "OK"});
                
                        }).catch(err => {
                                return res.status(404).send({errormsg: 'one time config failed'+ err})
                        })  
                       }
                       else{
                               console.log("new config FROM else",newConfig);
                   
                        x.userID = req.body[2].UserID
                        x.A_plus = req.body[0].Ctrl_A_plus
                        x.A = req.body[0].Ctrl_A
                        x.A_minus = req.body[0].Ctrl_A_minus
                        x.B_plus = req.body[0].Ctrl_B_plus
                        x.B = req.body[0].Ctrl_B
                        x.B_minus = req.body[0].Ctrl_B_minus
                        x.C_plus = req.body[0].Ctrl_C_plus
                        x.C = req.body[0].Ctrl_C
                        x.C_minus = req.body[0].Ctrl_C_minus
                        x.D_plus = req.body[0].Ctrl_D_plus ? req.body[0].Ctrl_D_plus : 0
                        x.D = req.body[0].Ctrl_D
                        x.I = req.body[0].Ctrl_I
                        x.F = req.body[0].Ctrl_F

                        x.class_F_min = req.body[1].Ctrl_FirstMin
                        x.class_SU_min = req.body[1].Ctrl_SecondUpperMin
                        x.class_SU_max = req.body[1].Ctrl_SecondUpperMax
                        x.class_SL_min = req.body[1].Ctrl_SecondLowerMin
                        x.class_SL_max = req.body[1].Ctrl_SecondLowerMax
                        x.class_pass_min = req.body[1].Ctrl_PassMin
                        x.class_pass_max = req.body[1].Ctrl_PassMax
                        x.save().then(data =>{
                                console.log("data =>",data)
                        return res.json({msg: "OK"});
                
                        }).catch(err => {
                                return res.status(404).send({errormsg: 'edit one time config failed'+ err})
                        })

                       }
               }
        )

        }
        if(req.method == 'GET'){

                console.log("req.query", req.query.UserID);
                one_timeConfig.findOne({userID: req.query.UserID}).then(
                        x=>{
                                if(x){
                                        return res.status(200).json({OTC:x})
                                }
                                else{
                                        return res.status(404).json({OTC:false})
                                }
                        }
                )
        }
        
        

     
    }
module.exports = one_timeConfigController;