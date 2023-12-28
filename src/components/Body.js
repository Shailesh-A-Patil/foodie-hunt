import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import OfferCarousel from "./OfferCarousel";
import RestaurantCard from "./RestaurantCard";
import ButtonList from "./ButtonList";
import {
  FOOD_CAROUSEL,
  ITEM_CAROUSEL,
  RESTAURANT_CAROUSEL,
  RESTAURANT_DATA,
} from "../mocks/data";

const Body = () => {
  return (
    <div className="flex flex-col w-[80%] m-auto justify-center">
      <div className="flex justify-center m-4">
        <input
          className="w-[40%] h-10 min-w-80 border rounded-lg"
          type="search"
        />
        <button className="h-10 border mx-2 px-10 bg-gray-300 font-medium rounded-lg">
          Search
        </button>
      </div>
      <div>
        <OfferCarousel data={FOOD_CAROUSEL} />
      </div>
      <div>
        <h1 className="font-bold text-2xl py-4">
          Restaurants with online food delivery
        </h1>
        <div>
            <ButtonList />
        </div>
        <div className="flex flex-wrap justify-around">
          {" "}
          {RESTAURANT_DATA.restaurants.map((res) => {
            return <RestaurantCard {...res.info} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Body;
