import React from "react";
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct'
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

const Checkout = () => {
const [{basket,user }, dispatch] = useStateValue();
console.log(basket);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://www.freewebheaders.com/wp-content/gallery/artistic-abstract-hero-headers/thumbs/thumbs_colorful-butterflies-flowers-abstract-art-vector-design.jpg"
          alt="Banner CheckOut"
        />
       <Link to='/'>Link to Home</Link>
        <div>
          <h3>Hello :{user?.email }</h3>
          <p className="checkout__title">Your shopping basket</p>

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
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
