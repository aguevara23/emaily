const passport = require("passport");

module.exports = app => {
  // begins passport authentication process with
  // gmail configuration
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // checks for authentication with google, then
  // redirects to /surveys if successful
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  // logs out user and redirects back to home page
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // returns current user information
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
