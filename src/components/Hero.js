import React from "react";

export default function Hero() {
  return (
    <main className="container hero flex">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE <br /> THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-buttons">
          <button>Shop Now</button>
          <button>Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <img src="/shops.png" alt="" />
        </div>
      </div>
      <div>
        <img src="/shoe_image.png" alt="" className="hero-image h-96 w-96" />
      </div>
    </main>
  );
}
