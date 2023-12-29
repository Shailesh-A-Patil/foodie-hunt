import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex bg-gray-200 p-2 items-center justify-around">
        <div className="text-xl font-bold my-auto">
          For better experience,download our app now
        </div>
        <div className="flex justify-center h-8 gap-5">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
            alt="googleplay"
          />
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
            alt="appstore"
          />
        </div>
      </div>
      <footer className="flex justify-around bg-[#02060C] text-white py-12 px-8">
        <div>
          <h2 className="text-2xl font-bold"> Foodie Hunt</h2>
          <h4 className="text-gray-300 my-4">© 2023 made By Shailesh</h4>
        </div>
        <div>
          <h2 className="text-lg font-bold">Company</h2>
          <ul>
            <li className="my-4">
              <Link
                to="https://www.linkedin.com/in/shailesh-a-patil"
                target="_blank"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                About
              </Link>
            </li>
            <li className="my-4">Careers</li>
            <li className="my-4">Team</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold">Contact Us</h2>
          <ul>
            <li className="my-4">Help & Support</li>
            <li className="my-4">Partner with us</li>
            <li className="my-4">Ride with us</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">We deliver to:</h2>
          <ul>
            <li className="my-4">Bangalore</li>
            <li className="my-4">Delhi</li>
            <li className="my-4">Kolkata</li>
            <li className="my-4">Mumbai</li>
            <li className="my-4">Ahmedabad</li>
            <li className="my-4">Pune</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
