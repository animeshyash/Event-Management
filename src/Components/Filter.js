import React from "react";
import "./Filter.css"

export const Filter = (props) => {
  const location = props.location;
  const setLocation = props.setLocation;

  const buttonArray = ["All", "Bangalore", "Online", "Morseveille"];

  function locationHandle(data) {
    setLocation(data);
  }

  return (
    <div className="filter_div_1">
      <div className="filter_div_2">
        {buttonArray.map((data) => (
          <button
            className={`${location === data ? "filter_btn_active" : "filter_btn"}`}
            // ${location === data ? "bg-red-500" : "bg-blue-500"}
            // `}
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
