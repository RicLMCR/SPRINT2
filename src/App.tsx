import React, { Dispatch, useEffect, useState, SetStateAction } from "react";
import "./App.css";
import CalendarComponent from "./components/CalendarComponent";
import BookingCheck from "./components/BookingCheck";
import Desks from "./components/Desks";
import UserID from "./userID";

function App(): JSX.Element {
  const [desksApp, setDesksApp] = useState();
  const deskProps = {
    setDesksApp: setDesksApp,
  };

  const [userIDApp, setUserIDApp] = useState();
  const userIDProps = {
    setUserIDApp: setUserIDApp,
  };

  const [date, setDate]: [Date, Dispatch<SetStateAction<Date>>] = useState(
    new Date()
  );

  // update desksApp on button click
  useEffect(() => {
    console.log(desksApp);
    console.log(userIDApp);
    console.log(date);
  }, [desksApp, userIDApp, date]);

  return (
    <div className="appContainer">
      <UserID {...userIDProps} />
      <div className="deskAndCalContainer">
        <Desks {...deskProps} />
        <CalendarComponent setDate={setDate} />
        {/* <BookingCheck date ={date}/> */}
        <div className="calContainer"></div>
      </div>
      <h1>User is: {userIDApp}</h1>
      <h1>Desk is: {desksApp}</h1>
    </div>
  );
}

export default App;
