import { useRouter } from "next/router";
import { MongoClient, ObjectId } from "mongodb";

import MenuDetailed from "../../../components/Menu/MenuUI/MenuDetails";
const MainMenuDetailScreen = (props) => {
  const router = useRouter();

  return (
    <>
      <MenuDetailed item={props.item} items={props.items} />
    </>
  );
};

export default MainMenuDetailScreen;

export async function getStaticProps(context) {
  const id = context.params.menuItemId;
  console.log(id);

  const uri =
    "mongodb+srv://user1:someuser@reactcluster.qulg5qe.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  await client.connect();

  const dbName = "contents";
  const collectionName = "pizzas";

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
        type: item.type,
        image: item.image,
        calories: item.calories,
      },
      items: items.map((doc) => ({
        id: doc._id.toString(),
        name: doc.name,
        price: doc.price,
        type: doc.type,
        image: doc.image,
        calories: doc.calories,
      })),
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const uri =
    "mongodb+srv://user1:someuser@reactcluster.qulg5qe.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  await client.connect();
  const dbName = "contents";
  const collectionName = "pizzas";

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  const menuItems = await collection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: "blocking",
    paths: menuItems.map((menuItem) => ({
      params: {
        menuItemId: menuItem._id.toString(),
      },
    })),
  };
}
