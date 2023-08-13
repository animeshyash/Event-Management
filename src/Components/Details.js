import React, { useState } from "react";

export const Details = ({ eventId }) => {
  const [data, setData] = useState({
    event: {
      eventId: 0,
      eventName: "string",
      eventDescription: "string",
      eventStatus: "string",
      eventStartDate: "string",
      eventEndDate: "string",
      eventLocation: "string",
    },
    participants: [
      {
        participantId: 0,
        participantFirstName: "string",
        participantLastName: "string",
        organization: "string",
        designation: "string",
        email: "string",
      },
    ],
  });

  return (
    <div>
      <div>
        <p>{}</p>
      </div>
    </div>
  );
};
