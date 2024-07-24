import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>
            Im a Traveler and dedicated my life to see the world! I provide you
            the best info so follow along!
          </p>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Postings">Postings</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/Contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact Me</h2>
          <p>Email: info@fili.com</p>
          <p>Phone: +110/112/911</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
