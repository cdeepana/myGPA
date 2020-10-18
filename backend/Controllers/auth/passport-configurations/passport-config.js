const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
JWTstrategy = require("passport-jwt").Strategy,
ExtractJWT = require("passport-jwt").ExtractJwt;
const User = require('./../../../model/Users')
const bcrypt = require('bcrypt')

function initialize() {
  const loginUser = (username, password, done) => {

    User.findOne({email: username}).then(user =>{
      if(user){
          bcrypt.compare(password, user.password, (err,matched)=> {
                if(err) return err;

                if(matched){
                  return done(null, user);
                }else{
                  return done("unauthorized access", false);
                }
            });
      }
      else{
        return done("unauthorized access", false);
      }
    });
    // console.log("test out", username, password);

  
  };

  const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.refresh_token_secret,
  };


  passport.use("login", new LocalStrategy({
    usernameField: 'email'
  },loginUser));


  passport.use("authenticate",new JWTstrategy(opts, (jwt_payload, done) => 
    {
      // console.log("authentic test",opts); 
      // console.log("jwt_payload===>", jwt_payload);
      done(null, jwt_payload);
    })
  );

  passport.serializeUser(function (user, done) {
    if (user) done(null, user);
  });
  passport.deserializeUser(function (id, done) {
    done(null, id);
  });
}

module.exports = initialize;
