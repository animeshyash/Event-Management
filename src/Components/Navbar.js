import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <div className="outer_div">
        <Link to={"/"}>
          <p className="para">Event Management</p>
        </Link>
        <div className="inner_div">
          <Link to={"/"}>
            <button className="btn">
              Home
            </button>
          </Link>
          <Link to={"/addevent"}>
            <button className="btn">
              Add Event
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// mr-5 p-1 px-2 rounded-md bg-blue-500 text-white text-[1.0rem]
// m-2 text-[1.5rem]
// flex justify-between h-min items-center my-2 border-b-2 border-gray-500