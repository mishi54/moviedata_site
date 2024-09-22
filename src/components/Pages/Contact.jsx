import React from 'react';
import {Form } from 'react-router-dom';
import '../../../style/contact.css';

export const DataContact=async({request})=>{
try {
  const res= await request.formData();
  const data=Object.fromEntries(res);
  console.log(data);
  return null;
} catch (error) {
  console.log(error);
}
}
export const Contact= () => {
  return (
    <Form className="contact-form" method='POST' action="/contact">
      <h2>Contact Us</h2>
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </Form>
  );
};

export default Contact