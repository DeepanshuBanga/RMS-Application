const { connectToDatabase } = require("../../lib/mongodb");

// async function addCatering(req, res) {
//   try {
//     // connect to the database
//     let { db } = await connectToDatabase();
//     // add the post

//     await db.collection("catering").insertOne(req.body);
//     // return a mess

//     return res.json({
//       message: "catering added successfully",
//       success: true,
//     });
//   } catch (error) {
//     // return an error
//     return res.json({
//       message: new Error(error).message,
//       success: false,
//     });
//   }
// }

async function signInHandler(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    // add the post

    const user = await db
      .collection("employee")
      .findOne({ emp_id: req.body.empID, password: req.body.pwd });
    // return a mess
    console.log(req.body);
    if (user) {
      return res.json({ isemp: true });
    } else {
      return res.json({ isemp: false });
    }
  } catch (error) {
    // return an error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

export default async function authHandler(req, res) {
  // switch the methods
  switch (req.method) {
    case "POST": {
      return signInHandler(req, res);
    }
  }
}
