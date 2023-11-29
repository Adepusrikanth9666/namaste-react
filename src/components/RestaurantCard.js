import { CDN_URL } from "../utils/constants";
export const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, deliveryTime,cloudinaryImageId } = resData?.data;
  return (
    <div className="rest-card-container">
      {/* 
        - image
        - Name of rest,star,rating,cuisine,delvery tie      
        */}
      <div className="rest-card-img">
        <img
          className="rest-img"
          src={CDN_URL+cloudinaryImageId}
          //   src="https://media.istockphoto.com/id/1158578874/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=612x612&w=0&k=20&c=ZHAsJ9sJJoeAmwD3iU1Oo2YSKn_BG6JoE7zuG1frxwg="
        />
      </div>
      <div className="rest-name rest-card-style">{name}</div>
      <div className="rest-start-rating rest-card-style">{avgRating}</div>
      <div className="rest-cusine rest-card-style">{cuisines.join(",")}</div>
      <div className="rest-delivery-tie rest-card-style">{deliveryTime}</div>
    </div>
  );
};

export default RestaurantCard;
