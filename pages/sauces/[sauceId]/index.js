import { useRouter } from "next/router";
import { MongoClient, ObjectId } from "mongodb";

import BaseSauceCheeseCurItem from "../../../components/Menu/MenuUI/baseSauceCheese/CurItem";
import BaseSauceCheeseListItems from "../../../components/Menu/MenuUI/baseSauceCheese/ListItems";

const SauceDetailScreen = (props) => {
  const router = useRouter();

  return (
    <>
      <BaseSauceCheeseCurItem
        item={props.item}
        type="SAUCE"
        pushingTo="cheeses"
      />
      <BaseSauceCheeseListItems items={props.items} domain="sauces" />
    </>
  );
};

// export async function getStaticProps() {

export default SauceDetailScreen;
// const item = await collection.findOne({ _id: ObjectId(id) });

export async function getStaticProps(context) {
  const id = context.params.sauceId;
  console.log(id);

  const uri =
    "mongodb+srv://user1:someuser@reactcluster.qulg5qe.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  await client.connect();

  const dbName = "contents";
  const collectionName = "sauces";

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
      },
      items: items.map((doc) => ({
        id: doc._id.toString(),
        name: doc.name,
        price: doc.price,
        description: doc.description,
        image: doc.image,
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
  const collectionName = "sauces";

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  const sauceItems = await collection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: "blocking",
    paths: sauceItems.map((sauceItem) => ({
      params: {
        sauceId: sauceItem._id.toString(),
      },
    })),
  };
}
