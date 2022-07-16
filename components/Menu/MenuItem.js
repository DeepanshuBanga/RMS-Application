import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./MenuItem.module.css";

function MenuItem(props) {
  const cart_ctx = useContext(CartContext);
  const buttonClickHandler = () => {
    cart_ctx.onAddItem(props.item.id, 1);
  };
  return (
    <div className={styles.menuItem}>
      <div>
        <img src={props.item.image} alt="a" />
      </div>

      <div>
        <h3>{props.item.name}</h3>
        <p>{props.item.description}</p>
      </div>
      <div>
        <h4> Rs. {props.item.price}</h4>
        <Button onClick={buttonClickHandler}>ADD</Button>
      </div>
    </div>
  );
}

export default MenuItem;
