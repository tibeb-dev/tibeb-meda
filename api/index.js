const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
dotenv.config();

app.listen(process.env.PORT , () => {
    console.log("backend is running in on port",process.env.PORT)
})
mongoose
.connect(process.env.MONGO_URL 
//   useNewUrlParser: true,
//     useUnifiedTopology: true
  )
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    
  })
  .catch(err => {
    console.error("Connection error", err);
  });
app.use(cors());
app.use(express.json());
app.use("/api/user" , userRoute );
app.use("/api/auth" , authRoute );
app.use("/api/products" , productRoute );
app.use("/api/orders" , orderRoute );
app.use("/api/carts" , cartRoute );
app.use("/api/checkout" , stripeRoute );