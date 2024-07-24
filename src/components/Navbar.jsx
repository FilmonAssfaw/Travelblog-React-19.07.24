import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    return () => window.removeEventListener("resize", showButton);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
          Fili Travels <i className="fab fa-typo3 navbar__logo-icon" />
          <img
            src="/public/Fili-Travels.png"
            alt="logo"
            className="navbar__logo-pic"
          />
        </Link>
        <div className="navbar__icon" onClick={handleClick}>
          <i
            className={
              click ? "fas fa-times navbar__icon--close" : "fas fa-bars"
            }
          />
        </div>
        <ul
          className={
            click ? "navbar__menu navbar__menu--active" : "navbar__menu"
          }
        >
          <li className="navbar__item">
            <Link to="/" className="navbar__link" onClick={closeMobileMenu}>
              DashBoard
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="Contact"
              className="navbar__link"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="Postings"
              className="navbar__link"
              onClick={closeMobileMenu}
            >
              Postings
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle="btn--outline">Login</Button>}
      </div>
    </nav>
  );
}
