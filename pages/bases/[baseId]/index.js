import { useRouter } from "next/router";
import { MongoClient, ObjectId } from "mongodb";

import BaseSauceCheeseCurItem from "../../../components/Menu/MenuUI/baseSauceCheese/CurItem";
import BaseSauceCheeseListItems from "../../../components/Menu/MenuUI/baseSauceCheese/ListItems";

const MainMenuDetailScreen = (props) => {
  const router = useRouter();

  return (
    <>
      <BaseSauceCheeseCurItem item={props.item} type="BASE" />
      <BaseSauceCheeseListItems items={props.items} domain="bases" />
    </>
  );
};

// export async function getStaticProps() {

export default MainMenuDetailScreen;
// const item = await collection.findOne({ _id: ObjectId(id) });

export async function getStaticProps(context) {
  const id = context.params.baseId;
  console.log(id);

  const uri =
    "mongodb+srv://user1:someuser@reactcluster.qulg5qe.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  await client.connect();

  const dbName = "contents";
  const collectionName = "bases";

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
  const collectionName = "bases";

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  const baseItems = await collection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: "blocking",
    paths: baseItems.map((baseItem) => ({
      params: {
        baseId: baseItem._id.toString(),
      },
    })),
  };
}
