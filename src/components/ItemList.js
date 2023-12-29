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
          <div key={index} className="flex flex-wrap p-2 m-1 border-gray-400 border-b-2">
            <div className="w-9/12">
              <p className="font-medium text-lg">{item.card.info.name}</p>
              <p className="font-medium text-lg">{item.card.info.price / 100} - Rs</p>
              <p>{item.card.info.description}</p>
              
            </div>
            <div className="w-3/12 h-15 ">
                <div className="absolute">
                    <button onClick={() => handleAdd(item)} className="p-3 bg-black text-white rounded-lg">Add +</button>
                </div>
              <img className="min-w-40 rounded-lg" src={IMG_CDN_URL + item.card.info.imageId} alt="menu" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
