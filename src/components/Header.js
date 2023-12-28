import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between shadow-md">
      <div className="h-28 w-28">
      <Link to={"/"}><img src={logo} alt="app-logo"></img></Link>
      </div>
      <div className="flex items-center list-none font-medium text-xl m-8">
      <li className="mx-2 px-2">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="mx-2 px-2">Online</li>
        <li className="mx-2 px-2">
          <Link to={"/help"}>Help</Link>
        </li>
        <li className="mx-2 px-2">
          <Link to={"/cart"}>Cart</Link>
        </li>
      </div>
    </div>
  );
};

export default Header;
