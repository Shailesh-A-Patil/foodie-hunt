import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IMG_CDN_URL } from "../constants";

const OfferCarousel = (FOOD_CAROUSEL) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1500 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1500, min: 900 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 900, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <h2 className="font-bold text-2xl my-4">Best offers for you</h2>
      <Carousel responsive={responsive}>
        {FOOD_CAROUSEL.data.imageGridCards.info.map((data) => (
          <div key={data.id} className="px-2 cursor-pointer">
            <img
              src={IMG_CDN_URL + data.imageId}
              className=" object-cover rounded-3xl"
              alt={`${data.id}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default OfferCarousel;
