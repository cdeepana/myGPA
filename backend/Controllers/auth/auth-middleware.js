const passport = require("passport");


function auth() {
  console.log("login const");
  return (req, res, next) => {
    passport.authenticate("login", (error, user, info) => {
      if (error) res.status(400).json({ statusCode: 200, message: error });
      req.login(user, function (error) {
        if (error) return next(error);
        next();
      });
    })(req, res, next);
  };
}

module.exports = auth;
