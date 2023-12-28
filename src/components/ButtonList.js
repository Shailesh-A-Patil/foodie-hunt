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
      {buttons.map((value) => {
        return (
          <div className="px-4 py-2 m-2 border rounded-xl">
            <span className="text-lg font-normal cursor-pointer">
              {value}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ButtonList;
