import { useRouter } from "next/router";
import classes from "../../Menu.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { cartActions } from "../../../../store/cart-slice";

const SpecialCurItem = ({ item }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getter = async () => {
      const response = await fetch("/api/pizza", {
        method: "GET",
      });
      const body = await response.json();
      setCartItems(body.result.items);
      setTotal(body.result.sum);
      console.log(body.result);
    };
    getter();
    if (cartItems.length > 0 && total > 0) {
      setDisabled(false);
    }
  }, [total]);

  const onbackHandler = () => {
    router.push("/");
  };

  const onAddToCart = () => {
    router.push("/cart");
  };

  return (
    <div className={classes.curItem}>
      <div className={classes.itemImage}>
        <Image
          src={"/images/icons/special.png"}
          alt="item image"
          width={600}
          height={600}
        />
      </div>
      <div className={classes.itemInfo}>
        <div className={classes.itemName}>choose a Pizza</div>
        <div className={classes.itemDescription}>
          <div className={classes.outer}>
            <div className={`${classes.inner} ${classes.veg}`}>
              <p>?</p>
            </div>
            <div className={classes.inner}>
              <p>? cal</p>
            </div>
            <div className={classes.inner}>
              <p>$ ?</p>
            </div>
          </div>
          <div className={classes["button-div"]}>
            <button
              className={classes["btn-main"]}
              onClick={onAddToCart}
              disabled={disabled}
            >
              Go To Cart
            </button>
          </div>
          <div className={classes["option-button-div"]}>
            <button className={classes["option-btn"]} onClick={onbackHandler}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialCurItem;
