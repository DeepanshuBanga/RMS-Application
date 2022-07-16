const { connectToDatabase } = require("../../lib/mongodb");

async function addEvents(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    // add the post

    await db.collection("events").insertOne(req.body);
    // return a mess

    return res.json({
      message: "event added successfully",
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

async function getEvents(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    // add the post

    const events = await db.collection("events").find({}).toArray();
    // return a mess

    return res.json({
      message: events,
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
      return getEvents(req, res);
    }
    case "POST": {
      return addEvents(req, res);
    }
  }
}
