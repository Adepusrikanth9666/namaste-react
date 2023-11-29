import React from "react";
import ReactDOM from "react-dom/client";
import { MENU_DATA } from "../data";
import Header from "./components/Header";
import Body from "./components/Body";

const ResruentCard = (props) => {
  const { restName, resRating, restCusine, restDeliveryTie } = props;
  return (
    <div className="rest-card-container">
      {/* 
      - image
      - Name of rest,star,rating,cuisine,delvery tie      
      */}
      <div className="rest-card-img">
        <img
          className="rest-img"
          src="https://media.istockphoto.com/id/1158578874/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=612x612&w=0&k=20&c=ZHAsJ9sJJoeAmwD3iU1Oo2YSKn_BG6JoE7zuG1frxwg="
        />
      </div>
      <div className="rest-name rest-card-style">{restName}</div>
      <div className="rest-start-rating rest-card-style">{resRating}</div>
      <div className="rest-cusine rest-card-style">{restCusine}</div>
      <div className="rest-delivery-tie rest-card-style">{restDeliveryTie}</div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      {/* footer */}
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
