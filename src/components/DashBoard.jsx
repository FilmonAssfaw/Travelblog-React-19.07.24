import UserCards from "./UserCards";
import Map from "./Map";
import "./DashBoard.css";

export default function DashBoard() {
  const users = [
    {
      id: 1,
      img: "https://picsum.photos/id/45/200/300",
      name: "Japan",
      description: "this is Japan",
      moreInfo: "Japan has also a lot of people and big cities",
    },
    {
      id: 2,
      img: "https://picsum.photos/id/30/200/300",
      name: "Eritrea",
      description: "This is Eritrea",
      moreInfo: "Has not so much people, but very beautiful landscape",
    },
    {
      id: 3,
      img: "https://picsum.photos/id/70/200/300",
      name: "Egypt",
      description: "This is Egypt",
      moreInfo: "Egypt has a lot of people and big Pyramids",
    },
    {
      id: 4,
      img: "https://picsum.photos/id/47/200/300",
      name: "England",
      description: "this is England",
      moreInfo: "England has a Queen and she died",
    },
    {
      id: 5,
      img: "https://picsum.photos/id/35/200/300",
      name: "Los Angeles",
      description: "This is LA",
      moreInfo: "Los Angeles is toppppppppppppppppp ",
    },
    {
      id: 6,
      img: "https://picsum.photos/id/75/200/300",
      name: "San Francisc",
      description: "This is San Francisco",
      moreInfo: "San Fracisco has a lot of people",
    },
  ];

  return (
    <div className="DashBoard__Container">
      <UserCards users={users} />
      <Map />
    </div>
  );
}
