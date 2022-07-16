import React, { useEffect, useState } from "react";
import { menu_data } from "../Menu/menu_data";

const CartContext = React.createContext({
  items: [],
  total: 0,
  onAddItem: () => {},
  onRemoveItem: () => {},
  getGrandTotal: 0,
  removeAll: () => {},
});

export const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  const addHandler = (id, quantity) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    console.log(items);
    const index = items.findIndex((item) => id === item.item_id);
    if (index >= 0) {
      let newCart = [...items];
      newCart[index].quantity += quantity;
      setItems(newCart);
    } else setItems([...items, { item_id: id, quantity }]);

    setTotal((prev) => prev + quantity);
    console.log(total);
    const price = menu_data.find((i) => i.id === id).price;
    setGrandTotal(grandTotal + price * quantity);
  };
  const removeAll = () => {
    setItems([]);
    setGrandTotal(0);
    setTotal(0);
  };

  const removeHandler = (id) => {
    let newCart = [...items];
    const index = items.findIndex((item) => id === item.item_id);
    setTotal(total - items[index].quantity);
    const price = menu_data.find((i) => i.id === id).price;
    setGrandTotal(grandTotal - price * items[index].quantity);
    if (index >= 0) newCart.splice(index, 1);
    setItems(newCart);
  };
  return (
    <CartContext.Provider
      value={{
        items: items,
        total: total,
        onAddItem: addHandler,
        onRemoveItem: removeHandler,
        getGrandTotal: grandTotal,
        removeAll: removeAll,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContext;
