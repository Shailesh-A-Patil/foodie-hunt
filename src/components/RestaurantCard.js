import {IMG_CDN_URL} from "../constants"

const RestaurantCard = ({
  name,
  avgRating,
  cuisines,
  cloudinaryImageId,
  areaName,
}) => {
  return (
    <div className="p-2 m-2 w-96 hover:shadow-lg transition-transform transform rounded-lg cursor-pointer hover:scale-105">
      <img className="rounded-lg" src={IMG_CDN_URL + cloudinaryImageId} alt="Restaurant" />
      <div className="font-semibold text-xl pt-2"> {name}</div>
      <div className="font-semibold text-l"> ⭐ {avgRating}</div>
      <div>{cuisines.join(', ')}</div>
      <div>{areaName}</div>
    </div>
  );
};

export default RestaurantCard;
