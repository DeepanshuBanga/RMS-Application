import React, { useContext } from "react";

import classes from "./Checkout.module.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import CartContext from "../store/cart-context";
import { menu_data } from "../Menu/menu_data";
import { List } from "@mui/material";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

function Checkout() {
  const cart_ctx = useContext(CartContext);
  return (
    <Card>
      <div className={classes.checkout}>
        <div className={classes.checkout_list}>
          <img
            className={classes.checkout_ad}
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPantry/December/SVD/GWICICIHero/PnatrySet3/SVD_Pantry_Desktop_hero_1500x600_ICICI_2._CB414528928_.jpg"
            alt=""
          />
          {console.log(cart_ctx.total)}
          {cart_ctx.total === 0 ? (
            <div>
              <h2>YOUR BASKET IS EMPTY</h2>
              <p>
                You have no items in your basket.To buy one or add to basket
                next to item.
              </p>
            </div>
          ) : (
            <div>
              <h2 className={classes.checkout_title}>YOUR SHOPPING BASKET</h2>
              {/* list out all the checked out product */}

              <List>
                {cart_ctx.items.map((item) => {
                  const idx = menu_data.findIndex((i) => i.id === item.item_id);
                  const data = menu_data[idx];
                  console.log(data);

                  return (
                    <CheckoutProduct
                      id={data.id}
                      title={data.name}
                      price={data.price}
                      quantity={item.quantity}
                    />
                  );
                })}
              </List>
            </div>
          )}
        </div>
        {cart_ctx.total > 0 && (
          <div className="checkout_right">
            {/* subtotal */}
            <Subtotal />
          </div>
        )}
      </div>
    </Card>
  );
}

export default Checkout;
