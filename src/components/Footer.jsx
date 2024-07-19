import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>
            We are a company dedicated to providing the best services for our
            customers.
          </p>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact Me</h2>
          <p>Email: info@agent.com</p>
          <p>Phone: +110 112 911</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
