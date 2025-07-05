import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa6";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="contact-heading">Contact</h2>
      <div className="contact-content">
        <p className="contact-text">
          If you're looking for someone who codes with heart, curiosity, and
          maybe a little too much enthusiasm for dark mode —
          <br />
          let’s talk!
        </p>
        <div className="social-media">
          <div className="icon-circle">
            <BiLogoGmail
              className="icon"
              onClick={() => {
                window.location.href = "mailto:prakartiprabhakar@gmail.com";
              }}
            />
          </div>
          <div className="icon-circle">
            <FaLinkedinIn
              className="icon"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/prakarti-prabhakar-2952ba212/",
                  "_blank"
                )
              }
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
