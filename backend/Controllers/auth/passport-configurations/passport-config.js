const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
JWTstrategy = require("passport-jwt").Strategy,
ExtractJWT = require("passport-jwt").ExtractJwt;
// const bcrypt = require('bcrypt')

function initialize() {
  const loginUser = (username, password, done) => {
    console.log("test out", username, password);
    if (username === "admin" && password === "admin") {
      return done(null, username);
    } else {
      return done("unauthorized access", false);
    }
  };

  const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.refresh_token_secret,
  };

//   const authenticateUser = (jwt_payload, done) => {
//     console.log("authentic test");

//     console.log("jwt_payload===>", jwt_payload);
//     done(null, jwt_payload);
//   };

  passport.use("login", new LocalStrategy(loginUser));
  // passport.use('authenticate',new JWTstrategy(opts, authenticateUser))

  passport.use( "authenticate",new JWTstrategy(opts, (jwt_payload, done) => 
    {
      var jwttt = ExtractJWT().fromHeader();
      console.log("jwtt",jwttt);
      console.log("authentic test",opts); 
      console.log("jwt_payload===>", jwt_payload);
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
