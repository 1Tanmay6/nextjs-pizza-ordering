import { useRouter } from "next/router";
import { MongoClient, ObjectId } from "mongodb";

import ToppingsCurItem from "../../../components/Menu/MenuUI/toppings/toppingsCurItem";
import ToppingsListItems from "../../../components/Menu/MenuUI/toppings/ListItems";

const ToppingsDetailScreen = (props) => {
  const router = useRouter();

  return (
    <>
      <ToppingsCurItem item={props.item} type="TOPPINGS" />
      <ToppingsListItems items={props.items} domain="toppings" />
    </>
  );
};

// export async function getStaticProps() {

export default ToppingsDetailScreen;
// const item = await collection.findOne({ _id: ObjectId(id) });

export async function getStaticProps(context) {
  const id = context.params.toppingId;
  console.log(id);

  const uri =
    "mongodb+srv://user1:someuser@reactcluster.qulg5qe.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  await client.connect();

  const dbName = "contents";
  const collectionName = "toppings";

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  const item = await collection.findOne({ _id: new ObjectId(id) });
  const items = await collection.find().toArray();

  client.close();

  return {
    props: {
      item: {
        id: item._id.toString(),
        name: item.name,
        price: item.price,
        description: item.description,
        image: item.image,
        type: item.type,
      },
      items: items.map((doc) => ({
        id: doc._id.toString(),
        name: doc.name,
        price: doc.price,
        description: doc.description,
        image: doc.image,
        type: doc.type,
      })),
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const uri =
    "mongodb+srv://user1:someuser@reactcluster.qulg5qe.mongodb.net/?retryWrites=true&w=majority";
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri);

  await client.connect();
  const dbName = "contents";
  const collectionName = "toppings";

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  const toppingItems = await collection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: "blocking",
    paths: toppingItems.map((toppingItem) => ({
      params: {
        toppingId: toppingItem._id.toString(),
      },
    })),
  };
}
