import React from "react";
import Button from "../button/button";
import "./contactMe.css";

const ContactMe = () => {
  return (
    <div>
      <h1 className="section-name">Contact Me</h1>
      <form method="post" action="#">
        <div className="inputs">
          <input className="text-input" type="text" name="name" placeholder="Name" />
          <input className="text-input" type="text" name="email" placeholder="Email" />
          <textarea className="text-input large" name="message" placeholder="Message" />
          <Button className="button-submit" type="submit">Send Message</Button>
        </div>
      </form>
    </div>
  )
}

export default ContactMe;
