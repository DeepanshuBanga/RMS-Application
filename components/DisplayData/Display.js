import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const rowss = [
  { id: 1, name: "Snow", advance: 100, date: "15Aug" },
  { id: 2, name: "Lannister", advance: 100, date: "15Aug" },
  { id: 3, name: "Lannister", advance: 100, date: "15Aug" },
  { id: 4, name: "Stark", advance: 100, date: "15Aug" },
  { id: 5, name: "Targaryen", advance: 100, date: "15Aug" },
];
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },

  { field: "date", headerName: "Date Of Booking", width: 120 },
  {
    field: "noOFGath",
    headerName: "Gathering",
    type: "number",
    width: 120,
  },
  { field: "email", headerName: "Email", type: "number", width: 120 },
  { field: "phone", headerName: "Phone", type: "number", width: 120 },
  { field: "advance", headerName: "Advance", type: "number", width: 90 },
];
export default function Display() {
  var rows = [];
  useEffect(() => {
    const res = fetch(`/api/reservations`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((d) => {
        console.log(d.message);
        rows = d.message;
        
      });
  }, []);

  rows["id"] = rows["_id"];
  console.log(rows);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

// export default Display;
