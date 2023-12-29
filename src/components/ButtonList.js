const ButtonList = () => {
  const buttons = [
    "Filter",
    "Sort By",
    "Fats Delivery",
    "New to Swiggy",
    "Ratting 4.0+",
    "Pure Veg",
    "Rs. 300-Rs. 600",
    "Less then 300",
  ];
  return (
    <div className="flex flex-wrap">
      {buttons.map((value,index) => {
        return (
          <div key={index} className="px-3 py-2 m-1 border rounded-xl hover:scale-105">
            <span className="text-base font-normal cursor-pointer">{value}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ButtonList;
