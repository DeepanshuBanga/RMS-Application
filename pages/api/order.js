const { connectToDatabase } = require("../../lib/mongodb");

async function addOrder(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    // add the post
    console.log(req.body);
    await db.collection("users").insertOne(req.body);
    // return a message

    const user = await db
      .collection("users")
      .findOne({ email: req.body.email });

    console.log(user);

    return res.json({
      message: { order_id: user._id, text: "Post added successfully" },
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
      return getPosts(req, res);
    }
    case "POST": {
      return addOrder(req, res);
    }
  }
}
