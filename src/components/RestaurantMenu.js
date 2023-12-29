import { MENU_DATA } from "../mocks/data";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [index, setIndex] = useState();
  const handleclick = (i) => {
    i !== index ? setShowMenu(true) : setShowMenu(!showMenu);
    setIndex(i);
  };
  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl font-medium p-2 m-2">Restaurant Menu</p>
      <div className="flex flex-col w-full items-center">
        {MENU_DATA.cards.map((menu, i) => {
          return (
            <div key={i} className="flex flex-col w-9/12 max-w-5xl shadow-md">
              <div
                className="flex justify-between px-1 m-4 cursor-pointer hover:text-orange-500"
                onClick={() => handleclick(i)}
              >
                <span className="text-xl font-medium ">
                  {menu.card.card.title}- ({menu.card.card.itemCards.length})
                </span>
                <span className="text-3xl font-extrabold">↓</span>
              </div>
              {showMenu && i == index && (
                <ItemList items={menu.card.card.itemCards} />
              )}
            </div>
          );
        })}
      </div>
      <hr></hr>
    </div>
  );
};
export default RestaurantMenu;
