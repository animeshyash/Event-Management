import React, { useState } from "react";
import "./Form.css";

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

  // async function postData() {
  //   const finalData = data;
  //   const response = await fetch("url", {
  //     method: "POST", // *GET, POST, PUT, DELETE, etc.
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(finalData), // body data type must match "Content-Type" header
  //   });
  // }

  return (
    <div className="form_div_1">
      <form className="form_div_2">
        <div className="form_div_3">
          <label htmlFor="eventId" className="form_label">
            Enter Event ID :
          </label>
          <input
            className="form_input"
            type="text"
            name="eventId"
            id="eventId"
            value={data.value}
            onChange={handleChange}
          />
        </div>
        <div className="form_div_3">
          <label htmlFor="eventName" className="form_label">
            Enter Event Name :
          </label>
          <input
            className="form_input"
            type="text"
            name="eventName"
            id="eventName"
            value={data.value}
            onChange={handleChange}
          />
        </div>
        <div className="form_div_3">
          <label htmlFor="eventDescription" className="form_label">
            Enter Event Description :
          </label>
          <input
            className="form_input"
            type="text"
            name="eventDescription"
            id="eventDescription"
            value={data.value}
            onChange={handleChange}
          />
        </div>
        <div className="form_div_3">
          <label htmlFor="eventStatus" className="form_label">
            Enter Status :
          </label>
          <input
            className="form_input"
            type="text"
            name="eventStatus"
            id="eventStatus"
            value={data.value}
            onChange={handleChange}
          />
        </div>
        <div className="form_div_3">
          <label htmlFor="eventStartDate" className="form_label">
            Enter Start Date :
          </label>
          <input
            className="form_input"
            type="text"
            name="eventStartDate"
            id="eventStartDate"
            value={data.value}
            onChange={handleChange}
          />
        </div>
        <div className="form_div_3">
          <label htmlFor="eventEndDate" className="form_label">
            Event End Date :
          </label>
          <input
            className="form_input"
            type="text"
            name="eventEndDate"
            id="eventEndDate"
            value={data.value}
            onChange={handleChange}
          />
        </div>
        <div className="form_div_3">
          <label htmlFor="eventLocation" className="form_label">
            Enter Location :
          </label>
          <input
            className="form_input"
            type="text"
            name="eventLocation"
            id="eventLocation"
            value={data.value}
            onChange={handleChange}
          />
        </div>
        <div className="form_div_4">
          <button className="form_btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
