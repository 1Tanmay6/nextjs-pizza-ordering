import React, { useState, useEffect } from "react";
import { MongoClient } from "mongodb";
import ToppingsSpecialCurItem from "../../components/Menu/MenuUI/toppings/toppingsSpecialCurItem";
import ToppingsListItems from "../../components/Menu/MenuUI/toppings/ListItems";

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

const Menu = ({ toppingsList }) => {
  return (
    <div>
      <ToppingsSpecialCurItem type="Toppings" />
      <ToppingsListItems
        items={toppingsList}
        domain="toppings"
        type="TOPPINGS"
      />
    </div>
  );
};

export async function getStaticProps() {
  const uri =
    "mongodb+srv://user1:someuser@reactcluster.qulg5qe.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  await client.connect();

  const dbName = "contents";
  const collectionName = "toppings";

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  const result = await collection.find().toArray();

  client.close();

  return {
    props: {
      toppingsList: result.map((doc) => ({
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

export default Menu;
