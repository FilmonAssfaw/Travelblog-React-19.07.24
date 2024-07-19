import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZE = ["btn--medium", "btn--large"];
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonSTYLES = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSIZE = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

  return (
    <Link to="Login" className="btn-mobile">
      <button
        className={`btn ${checkButtonSTYLES} ${checkButtonSIZE}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
