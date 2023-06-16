import React from "react";
import { MongoClient } from "mongodb";
import BaseSaucecheeseSpecialCurItem from "../../components/Menu/MenuUI/baseSauceCheese/SpecialCurItem";
import BaseSauceCheeseListItems from "../../components/Menu/MenuUI/baseSauceCheese/ListItems";

// const Dummy_list = [
//   {
//     id: 1,
//     name: "Queen ",
//     price: 10,

//     image: "/images/Pizza 1.png",

//   },

//   {
//     id: 2,
//     name: "Chicken ",
//     price: 12,

//     image: "/images/Pizza__2(non-veg).png",

//   },

//   {
//     id: 3,
//     name: " Tikka",
//     price: 12,

//     image: "/images/pizza3__sausage.png",
//
//   },
// ];

const Menu = ({ baseList }) => {
  return (
    <div>
      <BaseSaucecheeseSpecialCurItem type="Base" />
      <BaseSauceCheeseListItems items={baseList} domain="bases" type="BASE" />
    </div>
  );
};

export async function getStaticProps() {
  const uri =
    "mongodb+srv://user1:someuser@reactcluster.qulg5qe.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  await client.connect();

  const dbName = "contents";
  const collectionName = "bases";

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  const result = await collection.find().toArray();

  client.close();

  return {
    props: {
      baseList: result.map((doc) => ({
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

export default Menu;
