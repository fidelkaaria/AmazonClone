import "./Payment.css";
import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { useNavigate } from "react-router-dom";
import { db } from "./firebase";
import Button from "@mui/material/Button";
const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  // console.log("this is a >>>", basket,user)
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  const stripe = useStripe();
  const elements = useElements();

     useEffect(() => {
       // generate the special stripe secret which allows us to charge a customer
       const getClientSecret = async () => {
         const response = await axios({
           method: "post",
           // Stripe expects the total in a currencies subunits
           url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
         });
         setClientSecret(response.data.clientSecret);
       };

       getClientSecret();
     }, [basket]);

     console.log("THE SECRET IS >>>", clientSecret);
     console.log("👱", user);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true)

    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //payment intent = payment confirmation
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY__BASKET",
        });

        navigate("/orders", { replace: true });
      });
  };

  const handleChange = (event) => {
    //listen for changes in the card Element
    //display any errors as the customer types the card details

    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(<Link to="/">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* //Stripe functionality  */}

            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        Subtotal ({basket.length}): <strong>{value}</strong>
                      </p>
                      <span className="subtotal__gift">
                        <input type="checkbox" />
                        This order contains a gift
                      </span>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />

                {/* <Button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                </Button> */}
                
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* errors */}

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
