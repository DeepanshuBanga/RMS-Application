import React, { useContext } from "react";
import Employee from "../components/Home/Employee";
import MenuList from "../components/Menu/MenuList";
import AuthContext from "../components/store/auth-context";

function order() {
  const ctx = useContext(AuthContext);
  console.log(ctx.EmpID);

  return (
    <div>
      <Employee />
      <MenuList />
    </div>
  );
}

export default order;
