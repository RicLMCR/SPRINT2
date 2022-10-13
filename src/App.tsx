import React, { useEffect, useState } from "react";
import "./App.css";
import Desks from "./Desks";

function App() {
  const [desksApp, setDesksApp] = useState();
  const deskProps = {
    setDesksApp: setDesksApp,
  };

  // update desksApp on button click
  useEffect(() => {
    console.log(desksApp);
  }, [desksApp]);

  return (
    <div className="appContainer">
      <Desks {...deskProps} />

      <div className="calContainer"></div>
      <h1>{desksApp}</h1>
    </div>
  );
}

export default App;
