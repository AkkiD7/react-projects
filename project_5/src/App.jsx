import React from "react";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          className="
    inner-div"
        >
          <input
            type="name"
            name="name"
            id="name"
            placeholder="name"
            onChange={handleChange}
          />
        </div>
        <div
          className="
    inner-div"
        >
          <input type="email" name="email" id="email" onChange={handleChange} />
        </div>
        <div
          className="
    inner-div"
        >
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
        </div>
        <button>Signup</button>
      </form>
    </>
  );
}
