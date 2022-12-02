import React from 'react'
import './Home.css'
import Product from './Product';
// import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://www.shutterstock.com/image-photo/detroit-usa-nov-23-2019-600w-1569125059.jpg"
          alt="Amazon Background"
        />
     
        <div className="home__row">
          {/* Product */}
          <Product
            id={1}
            title="Learning the smart way"
            rating={5}
            price={27.99}
            image="https://m.media-amazon.com/images/I/81iFJX14saL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id={2}
            title="If L live Until morning"
            rating={4}
            price={30.99}
            image="https://m.media-amazon.com/images/I/61VDSO1wzPS._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            title="ODYSSEY"
            rating={5}
            price={50.99}
            image="https://m.media-amazon.com/images/I/711HFeHtWnL._AC_UY327_FMwebp_QL65_.jpg"
          />

          
          <Product
            id={4}
            title="Percy & The Olympians"
            rating={3}
            price={58.99}
            image="https://m.media-amazon.com/images/I/41hyq0nBRnL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id={5}
            title="Our little Adventures"
            rating={3}
            price={58.99}
            image="https://m.media-amazon.com/images/I/71tT7wGqhyL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={6}
            title="Running for Shelter"
            rating={3}
            price={58.99}
            image="https://m.media-amazon.com/images/I/61XQGOcKe5L._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home