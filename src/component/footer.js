import React, { useRef } from "react";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import "./footer.css";
import emailjs from "@emailjs/browser";

function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bpynchs",
        "template_n56vwiw",
        form.current,
        "phhftrPoAAHP66zeJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("msg sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="footer-main " id="contact">
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
          <h3>Contact Me</h3>
          <form className="form" ref={form} onSubmit={sendEmail}>
            <input
              placeholder="Name"
              className="form-control"
              type="text"
              name="user_name"
            />

            <input
              placeholder="email"
              className="form-control"
              type="email"
              name="user_email"
            />

            <textarea
              placeholder="Message"
              className="form-control"
              name="message"
              id="messge"
              cols="30"
              rows="10"
            />
            <button className="btn" type="submit" value="Send">
              Send Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
