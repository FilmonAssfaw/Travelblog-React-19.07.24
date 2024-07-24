import "./IconButton.css";

export default function IconButton({ children, onClick, icon }) {
  return (
    <button className="IconButton" onClick={onClick}>
      {children} {icon}
    </button>
  );
}
