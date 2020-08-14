
const semester = require('../../model/semester');
const { reset } = require('nodemon');

function semesterController(req,res) {

    if(req.method == 'POST'){
      let quickStatus={Good:0, Medium:0, Weak:0 }

        req.body[0].subS.forEach((element,index) => {
            let x = element.subjectGrade
            console.log("index",index);
            switch (x) {
              case "A+":
              case "A":
              case "A-":
              case "B+":
              case "B":
              case "B-":
              case "C+":
              case "C":
                req.body[0].subS[index].status = 'Good'
                quickStatus['Good'] += 1;
                break;
              case "C-":
                case "D+":
                case "D":
                req.body[0].subS[index].status = 'Medium'
                quickStatus['Medium'] += 1;
                break;
              default:
                req.body[0].subS[index].status = 'Weak'
                quickStatus['Weak'] += 1;
            }
            
        });
        req.body[0].subS.quickStatus = quickStatus

        

    var newSemester = new semester();
        newSemester.userID = req.body[1].UserID,
        newSemester.yearOfSem = req.body[0].yearOfSem,
        newSemester.numberOfSem = req.body[0].numberOfSem
        newSemester.semInfo[0] = req.body[0].subS
        newSemester.semInfo[1] = quickStatus

    semester.findOne({userID:req.body[1].UserID , yearOfSem:req.body[0].yearOfSem ,numberOfSem : req.body[0].numberOfSem}).then(
        x=>{
            if(!x){
                newSemester.save().then(data=>{
                    console.log("saved ok !")
                    return res.status(200).json({msg:"new sem info saved"})
            
                }).catch(err => {
                    return res.status(404).send({errormsg: 'one time' + err})
                })
            }
            else{
                x.semInfo[0] = req.body[0].subS
                x.semInfo[1] = quickStatus
                x.save().then(data =>{
                    return res.status(200).json({msg:"updated sem info"});
                }).
                catch(err=>  res.status(404).json({msg:"could not update sem info"+ err}) )
            }
        }
    )
    }

    if(req.method == 'GET'){
        console.log("req.query", req.query.UserID);
        semester.find({userID:req.query.UserID}).then(
            x=>{
                console.log(x)
                if(x){ 
                return res.status(200).json({semesters: x})
                }
                else{
                   return res.status(404).json({msg: 'no data'})
                }
            }
        )
    }
    
    
    }
module.exports = semesterController;