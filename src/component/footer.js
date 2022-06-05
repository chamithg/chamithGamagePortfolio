import React from "react";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import "./../App.css";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-main">
      <div className="section-center footer">
        <div className="contact-details">
          <h4>
            <ImLocation /> Location:{" "}
            <span className="conact-span">Redwood city, CA 94061</span>
          </h4>
          <h4>
            <MdEmail /> Email Address:{" "}
            <span className="conact-span">cgamage92@yahoo.com</span>
          </h4>
          <h4>
            {" "}
            <BsTelephoneFill /> Call:{" "}
            <span className="conact-span">951-451-1918</span>
          </h4>
        </div>
        <div className="contact-form">
          <h3>Contact Us</h3>
          <div className="form">
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
            />

            <textarea
              className="form-control"
              name="message"
              id="messge"
              cols="30"
              rows="10"
              placeholder="Message"></textarea>
            <button type="submit"> Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
