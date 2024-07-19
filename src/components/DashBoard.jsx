import UserCards from "./UserCards";
import Map from "./Map";
import "./DashBoard.css";

export default function DashBoard() {
  const users = [
    {
      id: 1,
      img: "https://via.placeholder.com/150",
      name: "Japan",
      description: "dsjdsfkjhfksjh",
    },
    {
      id: 2,
      img: "https://via.placeholder.com/150",
      name: "Eritrea",
      description: "sdfkjhfskjshfsj",
    },
    {
      id: 3,
      img: "https://via.placeholder.com/150",
      name: "Egypt",
      description: "sfjfsfshfsdh",
    },
  ];

  return (
    <div className="DashBoard__Container">
      <UserCards users={users} />
      <Map />
    </div>
  );
}
