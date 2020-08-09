const passport = require("passport");
const initializePassport = require("./passport-configurations/passport-config");
initializePassport();
const User = require('../../model/Users')

function auth(type) {
  console.log("type ==>",type);
  if (type == "login") {   //    ========================   login functionality
    console.log("login const");
    return (req, res, next) => {
      passport.authenticate("login", (error, user, info) => {
        if (error) {
          
          return res.sendStatus(404);
          ;
      }
        req.login(user, function (error) {
          if (error) return next(error);
          next();
        });
      })(req, res, next);
    };
  }

  if (!type) {         // ===============================    authentication functionality
    return (req, res, next) => {
      passport.authenticate(
        "authenticate",
        { session: false },
        (err, user, info) => {
          // if (err) return next(err);
          if (err) console.log("err->", err);

          console.log("user->", user);
          console.log("info->", info);
          if(user == false){
            res.json({auth: false});
          }
          next();
        }
      )(req, res.next);
    };
  }

}

module.exports = auth;
