import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
const Complete = () => {
  const item1 = useSelector((state) => state.item.item);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    let temp = 0;
    temp += item1.pizza.price;
    temp += item1.base.price;
    temp += item1.sauce.price;
    item1.toppings.map((item) => {
      temp += item.price;
    });
    setSum(temp);
    console.log(sum);
  }, []);

  return (
    <div>
      <h1>Pizza</h1>
      <p>{item1.pizza.name}</p>
      <h1>Base</h1>
      <p>{item1.base.name}</p>
      <h1>Sauce</h1>
      <p>{item1.sauce.name}</p>
      <h1>Toppings</h1>
      {item1.toppings.map((item) => {
        return <p>{item.name}</p>;
      })}
      <h1>Total</h1>
      <p>${sum}</p>
    </div>
  );
};

export default Complete;
