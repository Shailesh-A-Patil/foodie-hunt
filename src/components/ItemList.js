import { IMG_CDN_URL } from "../constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    const handleAdd = (item) => {
        dispatch(addItem(item));
    }
  return (
    <div>
      {items.map((item, index) => {
        return (
          <div key={index} className="flex flex-wrap p-2 m-1 border-gray-400 shadow-md">
            <div className="w-9/12">
              <p className="font-medium text-sm">{item.card.info.name}</p>
              <p className="font-medium text-sm">{item.card.info.price / 100} - Rs</p>
              <p className="text-sm">{item.card.info.description}</p>
              
            </div>
            <div className="w-3/12 h-15 ">
                <div className="absolute">
                    <button onClick={() => handleAdd(item)} className="p-2 bg-black text-white rounded-lg">Add +</button>
                </div>
              <img className=" rounded-lg" src={IMG_CDN_URL + item.card.info.imageId} alt="menu" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
