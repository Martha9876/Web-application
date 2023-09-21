import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [contactusStatus, setContatusStatus] = useState("");

  const contactus = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/contactus", {
      name: name,
      email: email,
      phone: phone,
      subject:subject,
    }).then((response) => {
      if(response.data.message){
        setContatusStatus(response.data.message);
      }else{
        setContatusStatus("Message Sent");
      }
    })
  }
  return (
    < section className="containers">
    <div className="wrapper">
    <div className="title">
      <h1>Contact Us Form</h1>
    </div>
    <div className="contact-form">
      <div className="input-fields">
      <label for="name">Name</label>
      <input className="input" type="text" name="name" onChange={(e) => {setName(e.target.value)}} placeholder="Name" required />
        <label for="name">Email Address</label>
        <input className="input" type="text" name="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="Email Address" required />
        <label for="name">Phone</label>
        <input className="input" type="text" name="phone" onChange={(e) => {setPhone(e.target.value)}} placeholder="Phone" required />
      </div>
      <div className="msg">
      <label for="name">Subject</label>
        <textarea className="input" type="text" name="Subject" onChange={(e) => {setSubject(e.target.value)}} placeholder="Subject" required ></textarea>
        <input className="btn btn-primary " type="submit" onClick={contactus} value="Send" />
        <h1>{contactusStatus}</h1>

      </div>
    </div>
  </div>
</section>
  );
}

export default Contact

