// domain.com/api/new-coffee
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://plamena:99100316Pi@cluster0.xwlwv4y.mongodb.net/coffees?retryWrites=true&w=majority"
    );
    const db = client.db();

    const coffeesCollection = db.collection("coffees");
    const result = await coffeesCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Coffee inserted!" });
  }
}

export default handler;
