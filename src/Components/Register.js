import React, { useState } from "react";
import "./Register.css";

export const Register = ({ eventId }) => {
  const [data, setData] = useState({
    participantId: "",
    participantFirstName: "",
    participantLastName: "",
    organization: "",
    designation: "",
    emailAddress: "",
  });

  console.log(eventId);

  function handleChange(event) {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  return (
    <div className="div_1">
      <form className="div_2">
        <div className="div_3">
          <label htmlFor="participantId" className="label">
            Enter Participant ID :
          </label>
          <input
            className="input"
            type="text"
            name="participantId"
            id="participantId"
            value={data.value}
            onChange={handleChange}
          />
        </div>
        <div className="div_3">
          <label htmlFor="participantFirstName" className="label">
            Enter Participant First Name :
          </label>
          <input
            className="input"
            type="text"
            name="participantFirstName"
            id="participantFirstName"
            value={data.value}
            onChange={handleChange}
          />
        </div>
        <div className="div_3">
          <label htmlFor="participantLastName" className="label">
            Enter Participant Last Name :
          </label>
          <input
            className="input"
            type="text"
            name="participantLastName"
            id="participantLastName"
            value={data.value}
            onChange={handleChange}
          />
        </div>
        <div className="div_3">
          <label htmlFor="organization" className="label">
            Enter Organization :
          </label>
          <input
            className="input"
            type="text"
            name="organization"
            id="organization"
            value={data.value}
            onChange={handleChange}
          />
        </div>
        <div className="div_3">
          <label htmlFor="designation" className="label">
            Enter Designation :
          </label>
          <input
            className="input"
            type="text"
            name="designation"
            id="designation"
            value={data.value}
            onChange={handleChange}
          />
        </div>
        <div className="div_3">
          <label htmlFor="emailAddress" className="label">
            Event Email Address :
          </label>
          <input
            className="input"
            type="text"
            name="emailAddress"
            id="emailAddress"
            value={data.value}
            onChange={handleChange}
          />
        </div>
        <div className="btn_div">
          <button className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

//  flex justify-center items-center mt-10
//  w-2/5 p-2 border border-black rounded-md
//  div_3
// label
// input
