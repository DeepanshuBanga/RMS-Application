const { connectToDatabase } = require("../../lib/mongodb");

async function addReservations(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    // add the post

    await db.collection("reservations").insertOne(req.body);
    // return a mess

    return res.json({
      message: "Reservation added successfully",
      success: true,
    });
  } catch (error) {
    // return an error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

async function getReservations(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    // add the post

    const reservations = await db.collection("reservations").find({}).toArray();
    // return a mess

    return res.json({
      message: reservations,
      success: true,
    });
  } catch (error) {
    // return an error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case "GET": {
      return getReservations(req, res);
    }
    case "POST": {
      return addReservations(req, res);
    }
  }
}
