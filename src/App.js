import "./App.css";
// import Header from "./components/Header";
import SharedLayout from "./components/SharedLayout";
import Home from "./components/Home";
import Login from "./components/Login";
import React, { useEffect } from "react";
import Checkout from "./components/Checkout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { auth } from './components/firebase'
import { useStateValue } from "./components/StateProvider";
import Payment from "./components/Payment";
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from "./components/Orders";
const promise = loadStripe(
  "pk_test_51MAqBLASktI08Qnbuzd7RWzLfygzGeIi65l0mZMd74zYib5aj0cTRfwaYwZSgKbWVLh4nBfEECfcvrwnH82N2dj3008AJ14pE5"
);
function App() {
const [{ }, dispatch] = useStateValue();
  useEffect(() => {
   
   //Will only run once when the component loads
    auth.onAuthStateChanged((authUser) => {
      
   console.log( 'This is the  >>>',authUser);


      if (authUser) {
      
//if user just logged in or was logged in
        dispatch({
          type: "SET_USER",
          user : authUser
        })


      } else {
        
        dispatch({
      
          type: "SET_USER",
          user : null

    })


    }



    })

 },[])




  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route
              path="payment"
              element={
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              }
              exact
            />

            <Route path="checkout" element={<Checkout />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
