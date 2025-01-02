import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdOutlineMessage, MdCall } from "react-icons/md";
import { HiMail } from "react-icons/hi";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <> 
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdOutlineMessage fontSize={24} />}
          />
          <Button text="VIA CALL" icon={<MdCall fontSize={24} />} />
        </div>
        <Button
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize={24} />}
          isOutline={true}
        />

        <form onSubmit={handleSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Message</label>
            <textarea
              name="text"
              id="text"
              placeholder="Write your message here"
              rows={8}
              value={formData.text}
              onChange={handleChange}
            />
          </div>
          <Button text="Submit" icon={<HiMail fontSize={24} />} type="submit" />
        </form>
      </div>

      <div className={styles.contact_img}>
        <img src="/contact_img.svg" alt="Contact illustration" />
      </div>

     
    </section>
    <div className={styles.preview}>
    {formData.name && (
      <p>
        <strong>Name:</strong> {formData.name}
      </p>
    )}
    {formData.email && (
      <p>
        <strong>Email:</strong> {formData.email}
      </p>
    )}
    {formData.text && (
      <p>
        <strong>Message:</strong> {formData.text}
      </p>
    )}
  </div></>
  );
}
