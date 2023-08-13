import React, { useState } from "react";

export const Register = () => {
  const [data, setData] = useState({
    participantId: "",
    participantFirstName: "",
    participantLastName: "",
    organization: "",
    designation: "",
    emailAddress: "",
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
          <label htmlFor="participantId" className="text-[1.3rem]">
            Enter Participant ID :
          </label>
          <input
            className="border-black border ml-2 p-2 rounded-md h-8"
            type="text"
            name="participantId"
            id="participantId"
            value={data.value}
            onChange={handleChange}
          />
        </div>
        <div className="text-[1rem] flex items-center justify-between mt-2">
          <label htmlFor="participantFirstName" className="text-[1.3rem]">
            Enter Participant First Name :
          </label>
          <input
            className="border-black border ml-2 p-2 rounded-md h-8"
            type="text"
            name="participantFirstName"
            id="participantFirstName"
            value={data.value}
            onChange={handleChange}
          />
        </div>
        <div className="text-[1rem] flex items-center justify-between mt-2">
          <label htmlFor="participantLastName" className="text-[1.3rem]">
            Enter Participant Last Name :
          </label>
          <input
            className="border-black border ml-2 p-2 rounded-md h-8"
            type="text"
            name="participantLastName"
            id="participantLastName"
            value={data.value}
            onChange={handleChange}
          />
        </div>
        <div className="text-[1rem] flex items-center justify-between mt-2">
          <label htmlFor="organization" className="text-[1.3rem]">
            Enter Organization :
          </label>
          <input
            className="border-black border ml-2 p-2 rounded-md h-8"
            type="text"
            name="organization"
            id="organization"
            value={data.value}
            onChange={handleChange}
          />
        </div>
        <div className="text-[1rem] flex items-center justify-between mt-2">
          <label htmlFor="designation" className="text-[1.3rem]">
            Enter Designation :
          </label>
          <input
            className="border-black border ml-2 p-2 rounded-md h-8"
            type="text"
            name="designation"
            id="designation"
            value={data.value}
            onChange={handleChange}
          />
        </div>
        <div className="text-[1rem] flex items-center justify-between mt-2">
          <label htmlFor="emailAddress" className="text-[1.3rem]">
            Event Email Address :
          </label>
          <input
            className="border-black border ml-2 p-2 rounded-md h-8"
            type="text"
            name="emailAddress"
            id="emailAddress"
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
