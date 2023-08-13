import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between h-min items-center my-2 border-b-2 border-gray-500">
        <Link to={"/"}>
          <p className="m-2 text-[1.5rem]">Event Management</p>
        </Link>
        <div>
          <Link to={"/"}>
            <button className="mr-5 p-1 px-2 rounded-md bg-blue-500 text-white text-[1.0rem]">
              Home
            </button>
          </Link>
          <Link to={"/addevent"}>
            <button className="mr-5 p-1 px-2 rounded-md bg-blue-500 text-white text-[1.0rem]">
              Add Event
            </button>
          </Link>
          <Link to={"/registerparticipant"}>
            <button className="mr-5 p-1 px-2 rounded-md bg-blue-500 text-white text-[1.0rem]">
              Add Participant
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
