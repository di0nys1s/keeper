import React from "react";

const date = new Date();
const currentYear = date.getFullYear();

const Footer = () => {
  return <p className="footer">Copyright &copy; {currentYear}</p>;
};

export default Footer;
