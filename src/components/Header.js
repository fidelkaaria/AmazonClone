import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import { auth } from "./firebase";


const Header = () => {

  const [{ basket, user }, dispatch] = useStateValue();
  
  const handleAuthentication = () => {
    
    if (user) {
    
      auth.signOut();
  }


  }


  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">
          <img
            src="https://pngimg.com/uploads/amazon/small/amazon_PNG1.png"
            alt="Amazon"
          />
        </div>
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />

        <div className="header__searchIcon">
          <Link to="/">
            <SearchIcon />
          </Link>
        </div>
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">
              {" "}
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns </span>
            <span className="header__optionLineTwo">Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your </span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <div className="header__optionBasket">
          <Link to="/checkout">
            <ShoppingBasketIcon />
          </Link>
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
