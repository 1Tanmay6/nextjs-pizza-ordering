//* /api/new-meetup
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    console.log("in-server");
    const data = req.body;

    console.log(data);

    const uri =
      "mongodb+srv://user1:someuser@reactcluster.qulg5qe.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    await client.connect();
    console.log("connnection acquired");

    const db = client.db("login");
    console.log("db acquired");

    const meetupsCollection = db.collection("credentials");
    console.log("collection acquired");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);
    client.close();

    res.status(201).json({ message: "credentials inserted!" });
  }
}

export default handler;
