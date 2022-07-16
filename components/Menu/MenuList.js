import React from "react";
import MenuItem from "./MenuItem";
import { menu_data } from "./menu_data";
import styles from "./MenuList.module.css";

function MenuList() {
  return (
    <div className={styles.menuList}>
      {menu_data.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default MenuList;
