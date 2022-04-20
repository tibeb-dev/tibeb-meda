const router = require("express").Router();
const dotenv = require("dotenv");
dotenv.config();
// STRIPE_KEY = "sk_test_51Ki1NSFno1XGHwKH3VJ9xQW3JFzO5gXTXAWUnnUlkP0hp8ohrOlJevTDpZa0y6vo1jFfqRhyCkLHFfwmQakjX8h000KJsaNJt6"
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", (req, res) => {
// console.log("stripe" , process.env.STRIPE_KEY);
// console.log("stripe" , req.body.tokenId);

  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: 200,
      currency: "usd",
    },

    (stripeErr, stripeRes) => {
      if (stripeErr) {
        console.log("error",stripeErr);
        res.status(500).json(stripeErr);
      } else {
        console.log("success" ,stripeRes);
        res.status(200).json(stripeRes);
      }
    }
  );
});


module.exports = router;