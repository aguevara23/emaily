const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  // Uses the stripe api to bill a user and add credits to their account.
  // The requireLogin middleware checks to see if user is logged in first.
  app.post("/api/stripe", requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 credits",
      source: req.body.id
    });

    // req.user is available by default thanks to Passport. Tells you the currently logged in user.
    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};
