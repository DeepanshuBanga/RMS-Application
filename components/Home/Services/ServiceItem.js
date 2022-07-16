import React from "react";
import styles from "./ServiceItem.module.css";
import Card from "../../UI/Card/Card";

import { useRouter } from "next/router";
function ServiceItem(props) {
  const router = useRouter();
  console.log(router.query.emp_id);
  const id = router.query.emp_id;
  return (
    <div
      className={styles.fill}
      style={{ backgroundColor: props.bgColor }}
      onClick={() => {
        router.push(props.to);
      }}
    >
      <h1>{props.title}</h1>
    </div>
  );
}

export default ServiceItem;
