import { useState } from "react";
import "./App.css";
import { Homepage } from "./Components/Homepage";
import { Navbar } from "./Components/Navbar";
import { Filter } from "./Components/Filter";
import { Form } from "./Components/Form";
import { Register } from "./Components/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  const [location, setLocation] = useState("All");

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path={"/"}
          element={[
            <Filter location={location} setLocation={setLocation} />,
            <Homepage location={location} />,
          ]}
        />
        <Route path={"/addevent"} element={<Form />} />
        <Route path={"/registerparticipant"} element={<Register />} />
      </Routes>
      {/* <Filter location={location} setLocation={setLocation}/> */}
      {/* <Homepage location={location}/> */}
      {/* <Form /> */}
    </div>
  );
}

export default App;
