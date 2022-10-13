import React, { useEffect, useState } from "react";
import "./App.css";
import Desks from "./Desks";
import UserID from "./userID";

function App() {
  const [desksApp, setDesksApp] = useState();
  const deskProps = {
    setDesksApp: setDesksApp,
  };

  const [userIDApp, setUserIDApp] = useState();
  const userIDProps = {
    setUserIDApp: setUserIDApp,
  };

  // update desksApp on button click
  useEffect(() => {
    console.log(desksApp);
    console.log(userIDApp);
  }, [desksApp, userIDApp]);

  return (
    <div className="appContainer">
      <UserID {...userIDProps} />
      <div className="deskAndCalContainer">
        <Desks {...deskProps} />
        <div className="calContainer"></div>
      </div>
      <h1>User is: {userIDApp}</h1>
      <h1>Desk is: {desksApp}</h1>
    </div>
  );
}

export default App;
