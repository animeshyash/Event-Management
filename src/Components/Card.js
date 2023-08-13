import React from "react";

export const Card = (props) => {
  const data = props.data;
  return (
    <div className="border-2 border-gray-800 m-2 w-1/5 h-min rounded-md">
      <div className="my-3 flex flex-col items-center">
        <p className="my-2 text-[1.5rem] font-bold">{data.eventName}</p>
        <p className="my-2 text-[1.2rem] font-semibold">{data.location}</p>
        <p className="my-2 text-[1.2rem] font-semibold">{data.startdate}</p>
        <button className="my-2 p-1 px-2 rounded-md bg-blue-500 text-white text-[1rem]">
          Read More
        </button>
      </div>
    </div>
  );
};
