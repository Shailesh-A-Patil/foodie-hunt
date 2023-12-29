import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";

const Header = () => {
  const isOnline = useOnline();
  const cartItems = useSelector((store) =>store.cart.items)

  return (
    <div className="flex justify-between shadow-md w-full">
      <div className="h-28 w-28">
        <Link to={"/"}>
          <img src={logo} alt="app-logo"></img>
        </Link>
      </div>
      <div className="flex items-center list-none font-medium text-xl m-8">
        <li className="mx-2 px-2 hover:text-orange-500">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="mx-2 px-2">Online - {isOnline ? "✅" : "🔴"}</li>
        <li className="mx-2 px-2 hover:text-orange-500">
          <Link to={"/cart"}>Cart - {cartItems.length}</Link>
        </li>
      </div>
    </div>
  );
};

export default Header;
