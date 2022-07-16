import Card from "../UI/Card/Card";
import React, { useState } from "react";
import Button from "../UI/Button/Button";
import classes from "./Form.module.css";

import { useRouter } from "next/dist/client/router";
function Form(props) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [noOFGath, setNoOfGath] = useState("");
  const [date, setDate] = useState("");

  const [advance, setAdvance] = useState(0);

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      name,
      phone,
      email,
      noOFGath,
      date,
      advance,
    };

    const res = await fetch(`/api/${props.api}`, {
      method: "POST",

      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const d = await res.json();
    if (d) {
      router.back();
    }
    console.log(d);
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <h1 className={classes.heading}>{props.title}</h1>
        <div>
          <div className={classes.control}>
            <label>Customer Name:</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className={classes.control}>
            <label>Phone Number</label>
            <input
              type="number"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
          <div className={classes.control}>
            <label>Email</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className={classes.control}>
            <label>Number of Gathering</label>
            <input
              type="number"
              id="num"
              onChange={(e) => setNoOfGath(e.target.value)}
              value={noOFGath}
            />
          </div>
          <div className={classes.control}>
            <label>Date and time</label>
            <input
              type="date"
              id="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </div>

          <div>
            <div className={classes.control}>
              <label>Advance</label>
              <input
                type="number"
                id="advance"
                onChange={(e) => setAdvance(e.target.value)}
                value={advance}
              />
            </div>
          </div>
        </div>
        <div className={classes.btn}>
          <Button type="submit">Submit Info</Button>
        </div>
      </form>
    </Card>
  );
}

export default Form;
