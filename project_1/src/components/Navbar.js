import React from "react";

export default function Hello() {
  return (
    <div>
      <nav className="container flex justify-around items-center  h-18 m-0 ">
        <div className="logo">
          <img src="/brand_logo.png" alt="" />
        </div>
        <ul className="flex list-none gap-24 ">
          <li>MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
        <button className="px-4 py-1.5 font-medium h-8 bg-red">Login</button>
      </nav>
    </div>
  );
}
