import { appendFile } from "fs";
import { type } from "os";
import React from "react";

let bookings: {
  bookingRef: string;
  bookingDate: string;
  computerID: number;
  userID: number;
}[] = [
  {
    bookingRef: "Desk: 4 - Sat 15 oct 2022",
    bookingDate: "Sat 15 oct 2022",
    computerID: 4,
    userID: 10,
  },
  {
    bookingRef: "Desk: 2 - Wed 12 oct 2022",
    bookingDate: "Wed 12 oct 2022",
    computerID: 2,
    userID: 20,
  },
];

let officeDesks: { id: number; name: string; booked: boolean }[] = [
  { id: 1, name: "Computer 1", booked: false },
  { id: 2, name: "Computer 2", booked: false },
  { id: 3, name: "Computer 3", booked: false },
  { id: 4, name: "Computer 4", booked: false },
  { id: 5, name: "Computer 5", booked: false },
  { id: 6, name: "Computer 6", booked: false },
  { id: 7, name: "Computer 7", booked: false },
  { id: 8, name: "Computer 8", booked: false },
];

let officeUsers: { id: number; name: string }[] = [
  { id: 10, name: "User A" },
  { id: 20, name: "User B" },
];

interface IDateProps {
  date: Date;
}

function BookingCheck(props: IDateProps): any {
  let userInput: any = prompt("which desk would you like 1-8?");

  let userDeskNumber: number = parseInt(userInput);

  let datePick = { Date };

  let user: number = 10;

  let newBookingRef: string = "Desk: " + userInput + " - " + datePick;

  let newBooking: {
    bookingRef: string;
    bookingDate: any;
    computerID: number;
    userID: number;
  }[] = [
    {
      bookingRef: newBookingRef,
      bookingDate: datePick,
      computerID: userDeskNumber,
      userID: user,
    },
  ];

  let bookingAttempt: any = newBooking.find(
    (i) => i.computerID === userDeskNumber
  );

  //lists known bookings:

  // for(let i=0; i<bookings.length; i++){

  //     console.log(bookings[i].bookingRef); //use i instead of 0
  // }

  let errors: number = 0;

  for (let i = 0; i < bookings.length; i++) {
    if (bookingAttempt?.bookingRef === bookings[i].bookingRef) {
      errors = errors + 1;
    } else {
      //console.log('checking...')
    }
    console.log(errors);
  }

  function seatingJudegement() {
    if (errors === 0) {
      alert("Desks successfully booked");
      bookings.push(bookingAttempt);
    } else {
      alert("Sorry but this desk is already booked");
    }
  }

  seatingJudegement();

  return (
    console.log(bookingAttempt),
    console.log(bookingAttempt?.bookingRef),
    console.log(bookings)
  );
}

export default BookingCheck;
