import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import classes from "./cartItem.module.css";
import { useEffect } from "react";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(cartActions.removeItem(item.id));
  };

  return (
    <li className={classes.cartItem}>
      <div className={classes.cartItemImage}>
        <img src={item.pizza.image} alt={item.name} />
      </div>
      <div className={classes.cartItemInfo}>
        <div className={classes.cartItemName}>Pizza</div>
        <div className={classes.parent}>
          <div className={classes.child1}>{item.pizza.name}</div>
          <div className={classes.child2}>
            <div>Qty: 1</div>
            <div style={{ height: "10px" }}></div>
            <div>Price: ${item.pizza.price.toFixed(2)}</div>
          </div>
        </div>
        <br />
        <div className={classes.cartItemName}>Base</div>
        <div className={classes.parent}>
          <div className={classes.child1}>{item.base.name}</div>
          <div className={classes.child2}>
            <div>Qty: 1</div>
            <div style={{ height: "10px" }}></div>
            <div>Price: ${item.base.price.toFixed(2)}</div>
          </div>
        </div>
        <br />
        <div className={classes.cartItemName}>Sauce</div>
        <div className={classes.parent}>
          <div className={classes.child1}>{item.sauce.name}</div>
          <div className={classes.child2}>
            <div>Qty: 1</div>
            <div style={{ height: "10px" }}></div>
            <div>Price: ${item.sauce.price.toFixed(2)}</div>
          </div>
        </div>
        <br />
        <div className={classes.cartItemName}>Cheese</div>
        <div className={classes.parent}>
          <div className={classes.child1}>{item.cheese.name}</div>
          <div className={classes.child2}>
            <div>Qty: 1</div>
            <div style={{ height: "10px" }}></div>
            <div>Price: ${item.cheese.price.toFixed(2)}</div>
          </div>
        </div>
        <br />
        <div className={classes.cartItemName}>Toppings</div>
        {item.toppings.map((topping) => (
          <>
            <div className={classes.parent}>
              <div className={classes.child1}>{topping.name}</div>
              <div className={classes.child2}>
                <div>Qty: 1</div>
                <div style={{ height: "10px" }}></div>
                <div>Price: ${topping.price.toFixed(2)}</div>
              </div>
            </div>
            <br />
          </>
        ))}
      </div>
    </li>
  );
};

export default CartItem;
