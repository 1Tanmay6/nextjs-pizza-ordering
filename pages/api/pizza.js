//* /api/new-meetup
import { MongoClient, ObjectId } from "mongodb";

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

    const db = client.db("orders");
    console.log("db acquired");

    const meetupsCollection = db.collection("order");
    console.log("collection acquired");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);
    client.close();

    res.status(201).json({ message: "credentials inserted!" });
  }

  if (req.method === "GET") {
    const uri =
      "mongodb+srv://user1:someuser@reactcluster.qulg5qe.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    await client.connect();
    console.log("connnection acquired");

    const db = client.db("orders");
    console.log("db acquired");

    const meetupsCollection = db.collection("order");
    console.log("collection acquired");

    const result = await meetupsCollection.findOne({
      _id: new ObjectId("648efbba5fcbfae68474d3a8"),
    });
    console.log(result);
    client.close();

    res.status(201).json({ message: "credentials inserted!", result: result });
  }

  if (req.method === "PATCH") {
    const items = req.body.items;
    const sum = req.body.sum;

    console.log(items);
    console.log(sum);

    const uri =
      "mongodb+srv://user1:someuser@reactcluster.qulg5qe.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    await client.connect();
    console.log("connnection acquired");

    const db = client.db("orders");
    console.log("db acquired");

    const meetupsCollection = db.collection("order");
    console.log("collection acquired");

    const result = await meetupsCollection.updateOne(
      { _id: new ObjectId("648efbba5fcbfae68474d3a8") },
      { $set: { items: items, sum: sum } }
    );

    console.log(result);
    client.close();

    res.status(201).json({ message: "credentials inserted!" });
  }

  if (req.method === "DELETE") {
    const items = [];
    const sum = 0;
    const uri =
      "mongodb+srv://user1:someuser@reactcluster.qulg5qe.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    await client.connect();
    console.log("connnection acquired");

    const db = client.db("orders");
    console.log("db acquired");

    const meetupsCollection = db.collection("order");
    console.log("collection acquired");

    const result = await meetupsCollection.updateOne(
      { _id: new ObjectId("648efbba5fcbfae68474d3a8") },
      { $set: { items: items, sum: sum } }
    );

    console.log(result);
    client.close();

    res.status(201).json({ message: "credentials erased!" });
  }
}

export default handler;
