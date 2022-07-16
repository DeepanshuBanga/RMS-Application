import { useRouter } from "next/router";
import React, { useContext } from "react";
import Login from "../components/Login/Login";
import AuthContext, {
  AuthContextProvider,
} from "../components/store/auth-context";

function HomePage() {
  const router = useRouter();
  const ctx = useContext(AuthContext);
  return (
    <>
      <Login />
    </>
  );
}

export default HomePage;
