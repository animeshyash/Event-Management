import React, { useEffect, useState } from "react";
import "./Details.css";

export const Details = ({ eventId }) => {
  var data = {};
  async function fetchData() {
    const res = await fetch(`${eventId}`);
    data = await res.json();
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(eventId);
  // const [data, setData] = useState({
  //   event: {
  //     eventId: 0,
  //     eventName: "string",
  //     eventDescription: "string",
  //     eventStatus: "string",
  //     eventStartDate: "string",
  //     eventEndDate: "string",
  //     eventLocation: "string",
  //   },
  //   participants: [
  //     {
  //       participantId: 0,
  //       participantFirstName: "Abhay",
  //       participantLastName: "Singh",
  //       organization: "string",
  //       designation: "string",
  //       email: "string",
  //     },
  //     {
  //       participantId: 10,
  //       participantFirstName: "Yash",
  //       participantLastName: "Vardhan",
  //       organization: "string",
  //       designation: "string",
  //       email: "string",
  //     },
  //     {
  //       participantId: 1000,
  //       participantFirstName: "Rani",
  //       participantLastName: "Laxmi",
  //       organization: "string",
  //       designation: "string",
  //       email: "string",
  //     },
  //   ],
  // });

  const event = data.event;
  const part = data.participants;
  console.log(part);

  const listItems = part.map((element) => {
    return (
      <div className="details_div_1">
        <p>
          Participant Name : {element.participantLastName}{" "}
          {element.participantFirstName}
        </p>
        <p className="">Participant ID : {element.participantId}</p>
      </div>
    );
  });

  return (
    <div className="details_div_2">
      <p className="details_div_3">Event Details</p>
      <div className="details_div_4">
        <p className="details_div_5">Event ID : {event.eventId}</p>
        <p className="details_div_5">Event Name : {event.eventName}</p>
        <p className="details_div_5">
          Event Description : {event.eventDescription}
        </p>
        <p className="details_div_5">Event Location : {event.eventLocation}</p>
        <p className="details_div_5">
          Event Start Date : {event.eventStartDate}
        </p>
        <p className="details_div_5">Event End Date : {event.eventEndDate}</p>
        <p className="details_div_5">Event Status : {event.eventStatus}</p>
      </div>
      <p className="details_div_6">Registered Participants</p>
      <div className="details_div_7">{listItems}</div>
    </div>
  );
};
