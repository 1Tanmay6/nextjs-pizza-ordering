import CartScreen from "../../components/cart/cartScreen";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  console.log(cartItems);
  console.log(total);
  return (
    <div>
      <CartScreen />
    </div>
  );
};

export default cart;
