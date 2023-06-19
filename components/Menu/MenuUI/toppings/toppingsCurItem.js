import classes from "../../Menu.module.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { itemActions } from "../../../../store/item-slice";
import { cartActions } from "../../../../store/cart-slice";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Notification from "../../../../components/UI/Notification";

const ToppingsCurItem = ({ item, type }) => {
  const dispatch = useDispatch();
  const item1 = useSelector((state) => state.item.item);
  const router = useRouter();
  const [isPresent, setIsPresent] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const id = router.query.toppingId;

  useEffect(() => {
    setIsPresent(
      item1.toppings.find((element) => element.id == id) ? true : false
    );
  }, [id, item1]);

  const backButtonHandler = () => {
    router.back();
  };

  const onchoosen = async () => {
    console.log(item1);
    dispatch(itemActions.addPropsToItem({ type: "TOPPINGS", item: item }));
    console.log(item1);
  };

  const onComplete = async () => {
    setConfirm(true);

    let temp = 0;
    temp += item1.pizza.price;
    temp += item1.base.price;
    temp += item1.sauce.price;
    item1.toppings.map((item) => {
      temp += item.price;
    });
    dispatch(cartActions.addItemToCart({ item: item1 }));
    dispatch(cartActions.doTotal({ total: temp }));
    dispatch(itemActions.resetItem());
    const timeout = setTimeout(() => {
      router.push("/menu");
    }, 1000);
    console.log(item1);
  };

  return (
    <>
      {confirm ? (
        <Notification message="Item Added to the Cart" />
      ) : (
        <div></div>
      )}
      <div className={classes.curItem}>
        <div style={{ backgroundColor: "transparent", height: "100px" }}></div>
        <div className={classes.itemImage}>
          <img
            src={item.image}
            alt="item image"
            width={500}
            height={500}
            style={{ borderRadius: "50px" }}
          ></img>
        </div>
        <div className={classes.itemInfo}>
          <div className={classes.itemName}>{item.name}</div>
          <div className={`${classes.itemDescription} ${classes.half}`}>
            <p style={{ fontSize: "21px", fontStyle: "italic" }}>
              {item.description}
            </p>

            <div className={classes["button-div"]}>
              <button
                className={classes["btn-main"]}
                onClick={onchoosen}
                disabled={isPresent}
              >
                Choose
              </button>
              <button className={classes["btn-main"]} onClick={onComplete}>
                Complete
              </button>
            </div>
            <div className={classes["option-button-div"]}>
              <button
                className={classes["option-btn"]}
                onClick={backButtonHandler}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToppingsCurItem;

// export async function getStaticProps(context) {
//   const id = context.params.toppingId;
//   console.log(`from inside ${id}`);
//   return {
//     props: {
//       id: id,
//     },
//   };
// }
