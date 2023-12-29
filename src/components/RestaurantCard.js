import {IMG_CDN_URL} from "../constants"

const RestaurantCard = ({
  name,
  avgRating,
  cuisines,
  cloudinaryImageId,
  areaName,
}) => {
  return (
    <div className="p-2 m-2 w-60 hover:shadow-lg transition-transform transform rounded-lg cursor-pointer hover:scale-105">
      <img className="rounded-lg" src={IMG_CDN_URL + cloudinaryImageId} alt="Restaurant" />
      <div className="font-semibold text-base pt-2"> {name}</div>
      <div className="font-normal text-l"> ⭐ {avgRating}</div>
      <div className="text-sm">{cuisines.join(', ')}</div>
      <div className="text-sm">{areaName}</div>
    </div>
  );
};

export default RestaurantCard;
