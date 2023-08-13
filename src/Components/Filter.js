import React from "react";

export const Filter = (props) => {
  const location = props.location;
  const setLocation = props.setLocation;

  const buttonArray = ["All", "Bangalore", "Online", "Morseveille"];

  function locationHandle(data) {
    setLocation(data);
  }

  return (
    <div className="flex space-x-4 justify-center mt-6">
      <div className="flex items-baseline text-[1.2rem]">
        {buttonArray.map((data) => (
          <button
            className={`mr-5 p-1 px-2 rounded-md text-white text-[1.0rem]
            ${location === data ? "bg-red-500" : "bg-blue-500"}
            `}
            key={data.index}
            onClick={() => locationHandle(data)}
          >
            {data}
          </button>
        ))}
      </div>
    </div>
  );
};
