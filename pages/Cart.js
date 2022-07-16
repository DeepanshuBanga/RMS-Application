import React, { useContext } from "react";
import Checkout from "../components/Cart/Checkout";
import MenuItem from "../components/Menu/MenuItem";
import { menu_data } from "../components/Menu/menu_data";
import CartContext from "../components/store/cart-context";

function Cart() {
  const cart_ctx = useContext(CartContext);
  return (
    <div>
      <Checkout />
    </div>
  );
}

export default Cart;
