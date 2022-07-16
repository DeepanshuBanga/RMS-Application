import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ServiceItem from "./ServiceItem";
import styles from "./Services.module.css";
function Services() {
  return (
    <div className={styles.service_list}>
      <ServiceItem title="Reservations" bgColor="#4D77FF" to="reservation" />

      <ServiceItem title="Order" bgColor="#56BBF1" to="order" />

      <ServiceItem title="Events & Bookings" bgColor="#5EE6EB" to="events" />
      <ServiceItem title="Catering" bgColor="#F2FA5A" to="/catering" />
    </div>
  );
}

export default Services;
