import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  EmpID: "",
  onLogOut: () => {},
  onLogin: (empID, pwd) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [empID, setEmpID] = useState("hi ia m");

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    const storedEmpname = localStorage.getItem("EmpName");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
      setEmpID(storedEmpname);
    }
  }, []);

  const loginHandler = async (empID, pwd) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    // const res = await fetch("/api/user", {
    //   method: "POST",
    //   body: JSON.stringify({ email, password }),
    //   headers: { "Content-Type": "application/json" },
    // });
    // if (res) {

    const res = await fetch("/api/auth", {
      method: "POST",
      body: JSON.stringify({ empID, pwd }),
      headers: { "Content-Type": "application/json" },
    });
    const user = await res.json();
    console.log(user.isemp);
    if (!user.isemp) {
      localStorage.setItem("isLoggedIn", "0");
      setIsLoggedIn(false);
      setEmpID("");
      return;
    } else {
      localStorage.setItem("isLoggedIn", "1");
      localStorage.setItem("EmpName", empID);

      setEmpID(empID);
      console.log(empID);
      setIsLoggedIn(true);
    }

    // console.log("wrong username");
    // setIsLoggedIn(false);

    // setEmpData({ empID: email, name: password });
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("EmpName");
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        EmpID: empID,
        onLogin: loginHandler,
        onLogOut: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
