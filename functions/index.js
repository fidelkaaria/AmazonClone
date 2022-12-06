const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MAqBLASktI08QnbYyl8m7hUMpN7AdSvXYhfy3xk7M3N5hzsrHD26plXSfZuz8EwOubZs23PbFaxce7t5hAixJJZ0058rLUIvw"
);

// API


// App config
const app = express();

// middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// api routes


// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});


// Listener

 exports.api = functions.https.onRequest(app)


// http://127.0.0.1:5001/clone-80a36/us-central1/api
// npm install --save firebase-functions@latest

// test keys is 424242 for card until it fills 






















