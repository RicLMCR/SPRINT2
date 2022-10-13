import React, { useEffect, useState } from "react";
import "./App.css";
import UserID from "./userID";

function Desks(props: any) {
  // List of desks
  const [desks, setDesks] = useState<{ deskName: string; deskID: number }[]>([
    { deskName: "desk 1", deskID: 1 },
    { deskName: "desk 2", deskID: 2 },
    { deskName: "desk 3", deskID: 3 },
  ]);

  // Load calendar function
  const loadCal = (deskName: string) => {
    props.setDesksApp(deskName);
    console.log(`Loading calendar... ${deskName}`);
  };

  return (
    <div>
      <h2>Select Desk</h2>

      {desks.map((desk) => (
        <div className="deskContainer" key={desk.deskID}>
          <button
            type="button"
            onClick={() => {
              loadCal(desk.deskName);
            }}
          >
            {desk.deskName}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Desks;

// setBooking((bookingArray) => [
//   ...bookingArray,
//   { userID: "bob", deskName: "Desk 4", deskID: 4 },
// ]);
