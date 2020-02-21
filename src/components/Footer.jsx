import React from "react";

const date = new Date();
const currentYear = date.getFullYear();

const Footer = () => {
  return <p className="footer">Copyright &copy; di0nys1s {currentYear}</p>;
};

export default Footer;
