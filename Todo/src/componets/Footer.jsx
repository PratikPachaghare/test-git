import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        className="bg-dark text-light   
 py-3"
      >
        <h5>About Us</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h5>Contact</h5>  <p>Email: contact@todolist.com</p>
        <p>Phone: +1234567890</p>
        <h5>Social Media</h5>
        <a href="https://www.facebook.com" className="text-light mr-2">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.twitter.com" className="text-light mr-2">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com" className="text-light">
          <i className="fab fa-instagram"></i>
        </a>
      </footer>
    </div>
  );
};

export default Footer;
