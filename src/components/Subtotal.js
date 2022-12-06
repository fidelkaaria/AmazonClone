import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";


const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
 const navigate = useNavigate()
  return (
    <div className="subtotal">
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
      <Button variant="contained" onClick={(e) => navigate("/payment")}>
       Go to checkout
      </Button>
      {/* <button onClick={(e) => navigate("/payment")}>Go to checkout</button> */}
    </div>
  );
}

export default Subtotal