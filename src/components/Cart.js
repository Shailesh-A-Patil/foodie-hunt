import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../constants";
import { useDispatch } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };
  const handleClear = () => {
    dispatch(clearCart());
  };
  return (
    <div className="flex flex-col min-h-96 items-center">
      <button
        onClick={() => handleClear()}
        className="p-3 m-4 border border-gray text-xl font-medium rounded-lg"
      >
        Clear cart
      </button>
      <div className="w-[40%] min-w-64">
        {cartItems.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-wrap p-2 m-1 border-gray-400 border-b-2"
            >
              <div className="w-9/12">
                <p className="font-medium text-lg">{item.card.info.name}</p>
                <p className="font-medium text-lg">
                  {item.card.info.price / 100} - Rs
                </p>
                <p>{item.card.info.description}</p>
              </div>
              <div className="w-3/12">
                <div className="absolute">
                  <button
                    onClick={() => handleRemove(item)}
                    className="p-3 bg-black text-white rounded-lg"
                  >
                    Remove -
                  </button>
                </div>
                <img
                  className="min-w-40 rounded-lg"
                  src={IMG_CDN_URL + item.card.info.imageId}
                  alt="menu"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Cart;
