const { connectToDatabase } = require("../../lib/mongodb");

async function addCatering(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    // add the post

    await db.collection("catering").insertOne(req.body);
    // return a mess

    return res.json({
      message: "catering added successfully",
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

async function getCatering(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    // add the post

    const caterings = await db.collection("catering").find({}).toArray();
    // return a mess

    return res.json({
      message: caterings,
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
      return getCatering(req, res);
    }
    case "POST": {
      return addCatering(req, res);
    }
  }
}
