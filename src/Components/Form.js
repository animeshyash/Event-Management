import React, { useState } from "react";

export const Form = () => {
  const [data, setData] = useState({
    eventId: "",
    eventName: "",
    eventDescription: "",
    eventStatus: "",
    eventStartDate: "",
    eventEndDate: "",
    eventLocation: "",
  });

  function handleChange(event) {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div className="flex justify-center items-center mt-10">
      <form className="w-2/5 p-2 border border-black rounded-md">
        <div className="text-[1rem] flex items-center justify-between mt-2">
          <label htmlFor="eventId" className="text-[1.3rem]">
            Enter Event ID :
          </label>
          <input
            className="border-black border ml-2 p-2 rounded-md h-8"
            type="text"
            name="eventId"
            id="eventId"
            value={data.value}
            onChange={handleChange}
          />
        </div>
        <div className="text-[1rem] flex items-center justify-between mt-2">
          <label htmlFor="eventName" className="text-[1.3rem]">
            Enter Event Name :
          </label>
          <input
            className="border-black border ml-2 p-2 rounded-md h-8"
            type="text"
            name="eventName"
            id="eventName"
            value={data.value}
            onChange={handleChange}
          />
        </div>
        <div className="text-[1rem] flex items-center justify-between mt-2">
          <label htmlFor="eventDescription" className="text-[1.3rem]">
            Enter Event Description :
          </label>
          <input
            className="border-black border ml-2 p-2 rounded-md h-8"
            type="text"
            name="eventDescription"
            id="eventDescription"
            value={data.value}
            onChange={handleChange}
          />
        </div>
        <div className="text-[1rem] flex items-center justify-between mt-2">
          <label htmlFor="eventStatus" className="text-[1.3rem]">
            Enter Status :
          </label>
          <input
            className="border-black border ml-2 p-2 rounded-md h-8"
            type="text"
            name="eventStatus"
            id="eventStatus"
            value={data.value}
            onChange={handleChange}
          />
        </div>
        <div className="text-[1rem] flex items-center justify-between mt-2">
          <label htmlFor="eventStartDate" className="text-[1.3rem]">
            Enter Start Date :
          </label>
          <input
            className="border-black border ml-2 p-2 rounded-md h-8"
            type="text"
            name="eventStartDate"
            id="eventStartDate"
            value={data.value}
            onChange={handleChange}
          />
        </div>
        <div className="text-[1rem] flex items-center justify-between mt-2">
          <label htmlFor="eventEndDate" className="text-[1.3rem]">
            Event End Date :
          </label>
          <input
            className="border-black border ml-2 p-2 rounded-md h-8"
            type="text"
            name="eventEndDate"
            id="eventEndDate"
            value={data.value}
            onChange={handleChange}
          />
        </div>
        <div className="text-[1rem] flex items-center justify-between mt-2">
          <label htmlFor="eventLocation" className="text-[1.3rem]">
            Enter Location :
          </label>
          <input
            className="border-black border ml-2 p-2 rounded-md h-8"
            type="text"
            name="eventLocation"
            id="eventLocation"
            value={data.value}
            onChange={handleChange}
          />
        </div>
        <div className="text-[1rem] flex justify-center mt-2">
          <button className="w-full p-1 rounded-md bg-blue-500 text-white text-[1.0rem] mt-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
