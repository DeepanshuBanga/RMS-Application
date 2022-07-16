import classes from "./MainNavigation.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { white } from "@mui/material/colors";
import { TouchApp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LogoutIcon from "@mui/icons-material/Logout";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import AuthContext from "../store/auth-context";
import CartContext from "../store/cart-context";

function MainNavigation() {
  const router = useRouter();

  const ctx = useContext(AuthContext);
  const logoutHandler = () => {
    ctx.onLogOut();
    router.replace("/");
  };

  const cart_ctx = useContext(CartContext);
  useEffect(() => {}, [cart_ctx]);

  console.log(cart_ctx.total);

  return (
    <header className={classes.header}>
      <Link href={"/"}>
        <div className={classes.logo}>RMS</div>
      </Link>

      <nav>
        <ul>
          <li>
            <Link href={"https://www.google.co.in/"}>
              <IconButton>
                <GoogleIcon
                  fontSize="large"
                  className={classes.icon}
                  style={{ color: "white" }}
                />
              </IconButton>
            </Link>

            <Link
              href={"https://www.linkedin.com/in/deepanshu-banga-72467a193/"}
            >
              <IconButton>
                <LinkedInIcon
                  fontSize="large"
                  className={classes.icon}
                  style={{ color: "white" }}
                />
              </IconButton>
            </Link>

            <IconButton>
              <TwitterIcon
                fontSize="large"
                className={classes.icon}
                style={{ color: "white" }}
              />
            </IconButton>
          </li>
          <li>
            <Link href={ctx.isLoggedIn ? "/Cart" : "/"}>
              <IconButton>
                <ShoppingCartIcon
                  fontSize="large"
                  className={classes.icon}
                  style={{ color: "yellow" }}
                />
                <span>{cart_ctx.total}</span>
              </IconButton>
            </Link>

            <IconButton onClick={logoutHandler}>
              <LogoutIcon
                fontSize="large"
                className={classes.icon}
                style={{ color: "red" }}
              />
            </IconButton>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
