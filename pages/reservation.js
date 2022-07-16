import React from "react";
import Form from "../components/Booking/Form";
import Display from "../components/DisplayData/Display";

function reservations() {
  return (
    <>
      <Form title="Reservations" api="reservations" />
      {/* <Display /> */}
    </>
  );
}

export default reservations;
