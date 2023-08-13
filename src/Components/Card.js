import React from "react";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import "./Card.css";

export const Card = ({ data, removeEvent, getEventId }) => {
  //const data = props.data;
  // const removeEvent = props.removeEvent;

  return (
    <div className="div___1">
      <div className="div___2">
        <p className="para_">{data.eventId}</p>
        <p className="para_">{data.eventName}</p>
        <p className="semi_para">{data.location}</p>
        <p className="semi_para">{data.startdate}</p>
        <Link to={"/details"}>
          <button
            className="btn_"
            onClick={() => {
              getEventId(data.eventId);
            }}
          >
            Event Details
          </button>
        </Link>
        <Link to={"/registerparticipant"}>
          <button className="btn_two" onClick={() => getEventId(data.eventId)}>
            Register Participant
          </button>
        </Link>
        <AiFillDelete
          onClick={() => removeEvent(data.eventId)}
          className="icon"
        />
      </div>
    </div>
  );
};
