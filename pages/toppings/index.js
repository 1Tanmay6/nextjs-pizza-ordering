import { useSelector } from "react-redux";
import { useEffect } from "react";

const Toppings = () => {
  let item1 = useSelector((state) => state.item.item);

  useEffect(async () => {
    const reponse = await fetch("/api/pizza", {
      method: "POST",
      body: JSON.stringify(item1),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (reponse.ok) {
      console.log(reponse.body);
    }
  }, []);
  return (
    <div>
      <h1>Toppings</h1>
    </div>
  );
};

export default Toppings;
