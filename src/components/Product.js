import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { forwardRef } from "react";
import FlipMove from "react-flip-move";
import Button from '@mui/material/Button';


const Product    = ({ id, title, image, price, rating }) =>{
  const [{basket}, dispatch] = useStateValue();
  console.log(basket);
 
  const AddToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <big>{price}</big>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p>⭐</p>;
            })}
        </div>
      </div>

      <img src={image} alt="Book" />

      <Button variant="contained" onClick={AddToBasket}>
        Add to Basket
      </Button>
      {/* <button className="" onClick={AddToBasket}>
        Add to basket
      </button> */}
    </div>
  );
}

export default Product;
