import React, { useEffect, useState } from "react";
import "./App.css";
import UserID from "./userID";

function Desks(props: any) {
  // List of desks
  const [desks, setDesks] = useState<{ deskName: string; deskID: number }[]>([
    { deskName: "Desk 1", deskID: 1 },
    { deskName: "Desk 2", deskID: 2 },
    { deskName: "Desk 3", deskID: 3 },
  ]);

  // Load calendar function
  const loadCal = (deskName: string) => {
    props.setDesksApp(deskName);
    console.log(`Loading calendar... ${deskName}`);
  };

  return (
    <div className="deskContainer">
      <h3>Search Desk</h3>
      <input className="deskInput" type="text" />

      <h3>Select Desk</h3>

      {desks.map((desk) => (
        <div key={desk.deskID}>
          <button
            className="deskButton"
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
