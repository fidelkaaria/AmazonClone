import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from './reducer';

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length}): <strong>{ value}</strong>
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

      <button>Go to checkout</button>
    </div>
  );
}

export default Subtotal