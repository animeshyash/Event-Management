import { useEffect, useState } from "react";
import "./App.css";
import { Homepage } from "./Components/Homepage";
import { Navbar } from "./Components/Navbar";
import { Filter } from "./Components/Filter";
import { Form } from "./Components/Form";
import { Register } from "./Components/Register";
import { Route, Routes } from "react-router-dom";
import { Details } from "./Components/Details";

function App() {
  const [location, setLocation] = useState("All");
  const [eventId, setEventId] = useState(0);

  const [data, setData] = useState([
    {
      eventName: "Dance",
      eventId: 1,
      location: "Online",
      startdate: "22/11/2001",
    },
    {
      eventName: "Song",
      eventId: 15,
      location: "Morseveille",
      startdate: "22/11/2002",
    },
    {
      eventName: "Act",
      eventId: 14,
      location: "Online",
      startdate: "22/11/2003",
    },
    {
      eventName: "Fight",
      eventId: 12,
      location: "Bangalore",
      startdate: "22/11/2004",
    },
    {
      eventName: "Run",
      eventId: 123,
      location: "Online",
      startdate: "22/11/2005",
    },
    {
      eventName: "Run",
      eventId: 221,
      location: "Online",
      startdate: "22/11/2005",
    },
    {
      eventName: "Run",
      eventId: 142,
      location: "Bangalore",
      startdate: "22/11/2005",
    },
    {
      eventName: "Run",
      eventId: 987,
      location: "Online",
      startdate: "22/11/2005",
    },
    {
      eventName: "Run",
      eventId: 887,
      location: "Online",
      startdate: "22/11/2005",
    },
    {
      eventName: "Run",
      eventId: 96,
      location: "Online",
      startdate: "22/11/2005",
    },
  ]);

  function getEventId(eventId) {
    return setEventId(eventId);
  }

  async function removeEvent(eventId) {
    const newEvents = data.filter((event) => event.eventId !== eventId);
    // await fetch("https://example.com/delete-item/" + eventId, {
    //   method: "DELETE",
    // });
    console.log(newEvents);
    setData(newEvents);
  }

  // async function fetchData() {
  //   const res = await fetch("");
  //   const data = res.json();
  //   setData(data);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path={"/"}
          element={[
            <Filter location={location} setLocation={setLocation} />,
            <Homepage
              location={location}
              data={data}
              removeEvent={removeEvent}
              getEventId={getEventId}
            />,
          ]}
        />
        <Route path={"/addevent"} element={<Form />} />
        <Route path={"/details"} element={<Details eventId={eventId} />} />
        <Route
          path={"/registerparticipant"}
          element={<Register eventId={eventId} />}
        />
      </Routes>
      {/* <Filter location={location} setLocation={setLocation}/> */}
      {/* <Homepage location={location}/> */}
      {/* <Form /> */}
    </div>
  );
}

export default App;
