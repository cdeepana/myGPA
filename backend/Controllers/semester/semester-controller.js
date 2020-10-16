const semester = require('../../model/semester');
const one_timeConfig = require('../../model/onetimeConfig')
const { reset } = require('nodemon');

function semesterController(req,res) {

    if(req.method == 'POST'){
      let quickStatus={Good:0, Medium:0, Weak:0, sGpa:0, sGpaView:0, sumOfCredit:0 }
      
    function gpaCal(a,b){ // a = credit value of grade , b= credit value of particular subject 
        quickStatus['sumOfCredit'] += (a==null)? 0:b
        quickStatus['sGpa'] +=  (a==null)? 0:(a*b)
    }
      
        one_timeConfig.findOne({ userID: req.body[1].UserID }).then((x) => {
          if (x) {
            // return res.status(200).json({OTC:x})
//   A_plus: 4.2,
//   A: 4,
//   A_minus: 3.7,
//   B_plus: 3.3,
//   B: 3,
//   B_minus: 2.7,
//   C_plus: 2.3,
//   C: 2,
//   C_minus: 1.5,
//   D_plus: 0,
//   D: 1,
//   I: 0,
//   F: 0,
//   class_F_min: 3.7,
//   class_SU_min: 3.3,
//   class_SU_max: 3.69,
//   class_SL_min: 3,
//   class_SL_max: 3.29,
//   class_pass_min: 2,
//   class_pass_max: 2.99,
            // console.log("semester config retrieved OTC data", x,"x.A_minus",x.A_minus,"x['A_minus']",x['A_minus'],"typeof(x['A_minus'])",typeof(x['A_minus']));
            req.body[0].subS.forEach((subject,index) => {
                let y = subject.subjectGrade
                switch (y) {
                  case "A+":
                    req.body[0].subS[index].status = 'Good'
                    quickStatus['Good'] += 1;
                    gpaCal(x.A_plus,subject.credit)
                    break;
                  case "A":
                    req.body[0].subS[index].status = 'Good'
                    quickStatus['Good'] += 1;
                    gpaCal(x.A,subject.credit)
                    break;
                  case "A-":
                    req.body[0].subS[index].status = 'Good'
                    quickStatus['Good'] += 1;
                    gpaCal(x.A_minus,subject.credit)
                    break;
                  case "B+":
                    req.body[0].subS[index].status = 'Good'
                    quickStatus['Good'] += 1;
                    gpaCal(x.B_plus,subject.credit)
                    break;
                  case "B":
                    req.body[0].subS[index].status = 'Good'
                    quickStatus['Good'] += 1;
                    gpaCal(x.B,subject.credit)
                    break;
                  case "B-":
                    req.body[0].subS[index].status = 'Good'
                    quickStatus['Good'] += 1;
                    gpaCal(x.B_minus,subject.credit)
                    break;
                  case "C+":
                    req.body[0].subS[index].status = 'Good'
                    quickStatus['Good'] += 1;
                    gpaCal(x.C_plus,subject.credit)
                    break;
                  case "C":
                    req.body[0].subS[index].status = 'Good'
                    quickStatus['Good'] += 1;
                    gpaCal(x.C,subject.credit)
                    break;
                  case "C-":
                    req.body[0].subS[index].status = 'Medium'
                    quickStatus['Medium'] += 1;
                    gpaCal(x.C_minus,subject.credit)
                    break;
                  case "D+":
                    req.body[0].subS[index].status = 'Medium'
                    quickStatus['Medium'] += 1;
                    gpaCal(x.D_plus,subject.credit)
                    break;
                  case "D":
                    req.body[0].subS[index].status = 'Medium'
                    quickStatus['Medium'] += 1;
                    gpaCal(x.D,subject.credit)
                    break;
                  case "I":
                    req.body[0].subS[index].status = 'Weak'
                    quickStatus['Weak'] += 1;
                    gpaCal(0,subject.credit)
                    break;
                  case "F":
                    req.body[0].subS[index].status = 'Weak'
                    quickStatus['Weak'] += 1;
                    gpaCal(0,subject.credit)
                    break;
                  default:
                    req.body[0].subS[index].status = '--'
                    // quickStatus['Weak'] += 1;
                    gpaCal(null,subject.credit)
                }  
            });

            quickStatus['sGpa'] = quickStatus['sGpa']/quickStatus['sumOfCredit']; // creation semester GPA 
            quickStatus['sGpaView'] = quickStatus['sGpa'].toFixed(4);
            // req.body[0].subS.quickStatus = quickStatus
    
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
                        // console.log("saved ok !")
                        return res.status(200).json({msg:"new sem info saved"})
                
                    }).catch(err => {
                        return res.status(404).send({errormsg: 'one time' + err})
                    })
                }
                else if(x){
                    x.semInfo[0] = req.body[0].subS
                    x.semInfo[1] = quickStatus
                    x.markModified('semInfo');
                    // console.error("x=>",x);
                    x.save({x}).then(data =>{
                        return res.status(200).json({msg:"updated sem info"});
                    }).
                    catch(err=> {
                        console.error(err);
                        res.status(404).json({msg:"could not update sem info"+ err})
                    }  )
                }
            }
        )

          } else {
            // return res.status(404).json({OTC:false})
            res.status(404).json({ msg: "could not update sem info error occured " + err });
            console.log("error occured in OTC collection finding issue check semester-controller 'one_timeConfig.findOne'",err);
          }
        });



      
    }

    else if(req.method == 'GET'){
      if (!req.query.UserID) {
        console.error("semester control req.query.UserID is not found");
      } else {
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
    else if(req.method == 'DELETE'){
      console.log("delete method ok", req.query, "req.query.userID",req.query.userID);
      semester.findOneAndDelete({ userID: req.query.userID, yearOfSem : req.query.yearOfSem, numberOfSem: req.query.numberOfSem}).then(responseData => {
        console.log("findone response ========================>", responseData);
        return res.status(200).json({info: "Deleted sem"})
      }).catch(err =>{
        res.status(404).send('not sem found for deletion');
      });
    }
    
    
    }
module.exports = semesterController;