const passport = require("passport");
const initializePassport = require("../auth/passport-configurations/passport-config");
initializePassport();
const one_timeConfig = require('../../model/onetimeConfig')

function auth(type) {
  // console.log("type ==>",type);
  if (type == "login") {   //    ========================   login functionality
    // console.log("login const");
    return (req, res, next) => {
      passport.authenticate("login", (error, user, info) => {
        if (error) {
          
          return res.sendStatus(404);
          ;
      }
      // console.log("USER USER USER",user);
      one_timeConfig.findOne({userID: user._id}).then(x => {
        // console.log("x",x);
        // console.log("x.D_plus",x[D_plus]);

        req.body.isDplus = !!x ? x.D_plus : false;  // otc mean one time config  
        req.body.UserID =  user._id; 
        req.login(user, function (error) {
          if (error) return next(error);
          next();
        });
      }).catch((err) => {
        console.log(err);
        return res.status(404).send("error one_timeConfig with UID not found");
      })

       // req modified with collection object id and finally it will return to front end in next js file
        // req.login(user, function (error) {
        //   if (error) return next(error);
        //   next();
        // });
      })(req, res, next);
    };
  }

  else{         // ===============================    authentication functionality
    return (req, res, next) => {
      passport.authenticate(
        "authenticate",
        { session: false },
        (err, user, info) => {
          // if (err) return next(err);
          if (err) console.log("err->", err);

          // console.log("user->", user);
          // console.log("info->", info);
          if(user == false){
            return  res.status(404).json({auth: false});
          }
          next();
        }
      )(req, res.next);
    };
  }

}

module.exports = auth;


