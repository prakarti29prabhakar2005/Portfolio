import React from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="footer">
      <MdKeyboardDoubleArrowUp
        className="footer-home-arrow"
        onClick={scrollToTop}
      />
      PRAKARTI PRABHAKAR &copy; 2025
    </div>
  );
};

export default Footer;
