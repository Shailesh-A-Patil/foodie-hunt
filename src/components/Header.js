import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="flex justify-between shadow-md">
            <div className="h-28 w-28">
            <img  src={logo} alt="app-logo"></img>
            </div>
            <div className="flex items-center list-none font-medium text-xl m-8">
                
                    <li className="mx-2 px-2">search</li>
                    <li className="mx-2 px-2">Online</li>
                    <li className="mx-2 px-2">cart</li>
                    <li className="mx-2 px-2">SignIn</li>
                
            </div>
        </div>
    );
}

export default Header;