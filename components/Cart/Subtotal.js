import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { menu_data } from "../Menu/menu_data";
import CartContext from "../store/cart-context";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./Subtotal.module.css";
// import CurrencyFormat from "react-currency-format";
// import { ShoppingBasket } from "@material-ui/icons";

function Subtotal() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const router = useRouter();

  const cart_ctx = useContext(CartContext);
  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(name);
    cart_ctx.removeAll();
    const res = await fetch("/api/order", {
      method: "POST",

      body: JSON.stringify({
        name: name,
        phone: phone,
        total: cart_ctx.getGrandTotal,
      }),
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
        <div className={classes.Subtotal}>
          <div className={classes.control}>
            <label htmlFor="email">Customer Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              id="email"
              value={name}
            />
          </div>

          <div className={classes.control}>
            <label htmlFor="phone">Phone Number</label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              id="number"
              value={phone}
            />
          </div>

          <p className={classes.subtotal_gift}>
            <input type="checkbox" />
            This order contains a delivery
          </p>
          <div className={classes.btn}>
            <Button type="submit">Proceed to checkout</Button>
            <Button>Rs. {cart_ctx.getGrandTotal}</Button>
          </div>
        </div>
      </form>
    </Card>
  );
}

export default Subtotal;
