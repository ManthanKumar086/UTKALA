import React from "react";
import Cart from "./Cart";
import "./style.css";

const NewArrivals = ({ addToCart }) => {
  return (
    <>
      <section className="NewArrivals background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <img
                src="https://img.icons8.com/glyph-neue/64/26e07f/new.png"
                alt=""
              />
              <h2>New Arrivals </h2>
            </div>
            <div className="heading-right row ">
              <span>View all</span>
              <i className="fa-solid fa-caret-right"></i>
            </div>
          </div>

          <Cart addToCart={addToCart} />
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
