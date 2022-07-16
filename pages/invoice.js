import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import MyInvoice from "../components/Data/MyInvoice";

// Create Document Component
const invoice = () => (
  <PDFViewer>
    <MyInvoice />
  </PDFViewer>
);
export default invoice;
