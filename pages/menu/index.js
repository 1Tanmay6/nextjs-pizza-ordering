import React from "react";
import { MongoClient } from "mongodb";
import MenuComponent from "../../components/Menu/MenuComponent";

const Menu = ({ menuList }) => {
  return <MenuComponent currentItem={menuList[1]} menuList={menuList} />;
};

export async function getStaticProps() {
  const uri =
    "mongodb+srv://user1:someuser@reactcluster.qulg5qe.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  await client.connect();

  const dbName = "contents";
  const collectionName = "pizzas";

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  const result = await collection.find().toArray();

  client.close();

  return {
    props: {
      menuList: result.map((doc) => ({
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

export default Menu;
