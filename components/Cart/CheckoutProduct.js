import React, { useContext } from "react";
import classes from "./CheckoutProduct.module.css";
import Card from "../UI/Card/Card";
import IconButton from "@mui/material/IconButton";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import CartContext from "../store/cart-context";
function CheckoutProduct({ id, title, image, price, quantity }) {
  const cart_ctx = useContext(CartContext);
  const removeFromBasket = () => {
    cart_ctx.onRemoveItem(id);
  };
  console.log(price);
  return (
    <ListItem
      key={id}
      disableGutters
      secondaryAction={
        <IconButton onClick={removeFromBasket}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={`${id}) ${title}`} />
      <ListItemText primary={` Rs. ${price}`} />
      <ListItemText primary={`quantity:${quantity}`} />
    </ListItem>
  );
}

export default CheckoutProduct;
{
  /* <div className={classes.checkoutProduct}>
        <div className={classes.checkoutProduct_info}>
          <p className={classes.checkoutProduct_title}>{title}</p>

          <p className={classes.checkoutProduct_price}>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <p>{quantity}</p>
          <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
      </div> */
}
