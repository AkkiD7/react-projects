import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === ""
    ) {
      alert("Please fill all the fields");
      return;
    }

    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="inner-div">
          <label htmlFor="">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="inner-div">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="inner-div">
          <label htmlFor="">Password</label>
          <input
            type="passwaord"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}
