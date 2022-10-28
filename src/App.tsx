import React, { Dispatch, useEffect, useState, SetStateAction } from "react";
import "./App.css";
import CalendarComponent from "./components/CalendarComponent";
import BookingCheck from "./components/BookingCheck";
import Desks from "./components/Desks";
import UserID from "./components/userID";
import UserList from "./components/userList";

function App(): JSX.Element {
  const [desksApp, setDesksApp] = useState();
  const deskProps = {
    setDesksApp: setDesksApp,
  };

  // stores user id
  const [storeUser, setStoreUser] = useState();
console.log("the store user state is", storeUser);

  const [userIDApp, setUserIDApp] = useState();
  const userIDProps = {
    setUserIDApp: setUserIDApp,
  };

  const [date, setDate]: [Date, Dispatch<SetStateAction<Date>>] = useState(
    new Date()
  );

  const grabVars = () => {
    console.log(
      "Desk is:",
      desksApp,
      "User Id is:",
      userIDApp,
      "Date is:",
      date
    );
  };

  // update desksApp on button click
  useEffect(() => {
    console.log(desksApp);
    console.log(userIDApp);
    console.log(date);
  }, [desksApp, userIDApp, date]);

  return (
    <div className="appContainer">
      <UserList />
      {/* <UserID {...userIDProps} /> */}
      <div className="deskAndCalContainer">
        <Desks {...deskProps} />
        <CalendarComponent setDate={setDate} />
        {/* <BookingCheck date ={date}/> */}
        <div className="calContainer"></div>
      </div>
      <h1>User is: {userIDApp}</h1>
      <h1>Desk is: {desksApp}</h1>
      <button onClick={grabVars}>Submit</button>
    </div>
  );
}

export default App;
