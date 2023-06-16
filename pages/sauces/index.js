import React from "react";
import { MongoClient } from "mongodb";
import BaseSaucecheeseSpecialCurItem from "../../components/Menu/MenuUI/baseSauceCheese/SpecialCurItem";
import BaseSauceCheeseListItems from "../../components/Menu/MenuUI/baseSauceCheese/ListItems";
import { useSelector } from "react-redux";

const Sauce = ({ baseList: sauceList }) => {
  let item1 = useSelector((state) => state.item.item);

  console.log(item1);
  return (
    <div>
      <BaseSaucecheeseSpecialCurItem type="Sauce" />
      <BaseSauceCheeseListItems
        items={sauceList}
        domain="sauces"
        type="SAUCE"
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
  const collectionName = "sauces";

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

export default Sauce;
