import React, { useState } from "react";
import { Card } from "./Card";
import "./Homepage.css"

export const Homepage = ({ data, location, removeEvent, getEventId }) => {
  // const location = props.location;
  // const data = props.data;
  // const removeEvent = props.removeEvent;
  // const data = props.data;
  // console.log(data);
  console.log(removeEvent);
  return (
    <div>
      <div className="div__1">
        {data.length > 0 ? (
          <div className="div__2">
            <div className="div__3">
              {data.map((card) => {
                if (card.location === location)
                  return (
                    <Card
                      data={card}
                      removeEvent={removeEvent}
                      getEventId={getEventId}
                    />
                  );
                else if (location === "All")
                  return (
                    <Card
                      data={card}
                      removeEvent={removeEvent}
                      getEventId={getEventId}
                    />
                  );
              })}
            </div>
          </div>
        ) : (
          <div className="div_4">
            <div className="div_5">
              <p className="div_6">No Registrations has been Done!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// mt-[1rem]
// flex justify-center
//  flex flex-wrap w-full justify-center
//  flex justify-center items-center
//  border-2 p-2 border-gray-800
//  text-[1.5rem] font-semibold
