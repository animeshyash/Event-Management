import React, { useState } from "react";
import { Card } from "./Card";

export const Homepage = (props) => {
  const location = props.location;
  let data = [
    {
      eventName: "Dance",
      location: "Online",
      startdate: "22/11/2001",
    },
    {
      eventName: "Song",
      location: "Morseveille",
      startdate: "22/11/2002",
    },
    {
      eventName: "Act",
      location: "Online",
      startdate: "22/11/2003",
    },
    {
      eventName: "Fight",
      location: "Bangalore",
      startdate: "22/11/2004",
    },
    {
      eventName: "Run",
      location: "Online",
      startdate: "22/11/2005",
    },
    {
      eventName: "Run",
      location: "Online",
      startdate: "22/11/2005",
    },
    {
      eventName: "Run",
      location: "Bangalore",
      startdate: "22/11/2005",
    },
    {
      eventName: "Run",
      location: "Online",
      startdate: "22/11/2005",
    },
    {
      eventName: "Run",
      location: "Online",
      startdate: "22/11/2005",
    },
    {
      eventName: "Run",
      location: "Online",
      startdate: "22/11/2005",
    },
  ];

  return (
    <div>
      <div className="mt-[1rem]">
        {data.length > 0 ? (
          <div className="flex justify-center">
            <div className="flex flex-wrap w-full justify-center">
              {data.map((card) => {
                if (card.location === location) return <Card data={card} />;
                else if (location === "All") return <Card data={card} />;
              })}
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <div className="border-2 p-2 border-gray-800">
              <p className="text-[1.5rem] font-semibold">
                No Registrations has been Done!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
