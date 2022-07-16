import { Avatar } from "@mui/material";
import React, { useContext } from "react";
import AuthContext from "../store/auth-context";
import Card from "../UI/Card/Card";
import { deepOrange } from "@mui/material/colors";
import classes from "./Employee.module.css";

function Employee() {
  const ctx = useContext(AuthContext);
  return (
    <Card>
      <div className={classes.employee}>
        <Avatar
          src="https://thumbs.dreamstime.com/b/black-solid-icon-employee-applicant-man-logo-symbol-146530494.jpg"
          sx={{ bgcolor: deepOrange[500], width: 100, height: 100 }}
          variant="rounded"
        ></Avatar>
        <h2>{ctx.EmpID}</h2>
      </div>
    </Card>
  );
}

export default Employee;
