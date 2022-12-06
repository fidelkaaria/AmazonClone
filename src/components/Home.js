import React from 'react'
import './Home.css'
import Product from './Product';
import FlipMove from "react-flip-move";
// import { Link } from "react-router-dom";
// https://www.shutterstock.com/image-photo/detroit-usa-nov-23-2019-600w-1569125059.jpg

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images.unsplash.com/photo-1636390785299-b4df455163dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGhlYWRlciUyMGltYWdlJTIwcHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          alt="Amazon Background"
        />

        <div className="home__row">
          {/* Product */}
          <Product
            id={1}
            title="Designer bags just for you"
            rating={5}
            price={27.99}
            image="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2Vob2xkJTIwYW5kJTIwZmFzaGlvbiUyMHByb2R1Y3RzJTIwYW5kJTIwZWxlY3Ryb25pY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          />
          <Product
            id={2}
            title="Laptops from reputable  brands"
            rating={4}
            price={30.99}
            image="https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage?dpr=2&auto=format&fit=crop&w=416&q=60"
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            title="TVs Screens"
            rating={5}
            price={50.99}
            image="https://media.istockphoto.com/id/638043774/photo/modern-curved-4k-ultrahd-tv.jpg?b=1&s=170667a&w=0&k=20&c=78hmugbExHl8EasG-A9qWuppCUIYYP5iZD6PwOYs0jE="
          />

          <Product
            id={4}
            title="Best refrigerators from top brands"
            rating={3}
            price={58.99}
            image="https://images.unsplash.com/photo-1579123463212-08207f68133f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVmcmlnZXJhdG9yc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
          />
          <Product
            id={5}
            title="Speed Bikes for adventure"
            rating={3}
            price={58.99}
            image="https://images.unsplash.com/photo-1530784125230-543e3e83f60b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHNwZWVkJTIwYmlrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          />
        </div>
        <div className="home__row">
          <Product
            id={6}
            title="Amazing racing cars"
            rating={3}
            price={58.99}
            image="https://images.unsplash.com/photo-1575225929311-30a188430dec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3BvcnQlMjBjYXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          />
        </div>
      </div>
    </div>
  );
}

export default Home