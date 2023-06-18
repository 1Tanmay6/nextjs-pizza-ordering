import React from "react";

import MenuComponent from "../../components/Menu/MenuComponent";
import { MongoClient } from "mongodb";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const Menu = ({ menuList }) => {
  const items = useSelector((state) => state.cart.items);
  const sum = useSelector((state) => state.cart.total);

  console.log("Menu");
  for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
  }

  useEffect(() => {
    const getter = async () => {
      const response = await fetch("/api/pizza", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: items,
          sum: sum,
        }),
      });
    };
    if (sum > 0 && items.length > 0) {
      getter();
    }
  }, [sum, items]);

  console.log(sum);

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
