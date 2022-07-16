import React, { useContext, useState } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Login.module.css";
import AuthContext from "../store/auth-context";
import Link from "next/link";
import { useRouter } from "next/router";

function Login() {
  const ctx = useContext(AuthContext);
  const router = useRouter();
  const [formData, setFormData] = useState({ empID: "", pwd: "" });
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    ctx.onLogin(formData.empID, formData.pwd);
    if (ctx.isLoggedIn) router.push("/home");
  };
  return (
    <Card className={classes.login}>
      <h1 className={classes.title}>Employee Login</h1>
      <form onSubmit={onSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Employee ID</label>
          <input
            type="email"
            id="email"
            onChange={(e) =>
              setFormData({ ...formData, empID: e.target.value })
            }
            value={formData.empID}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setFormData({ ...formData, pwd: e.target.value })}
            value={formData.pwd}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default Login;
