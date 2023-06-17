import classes from "../../Menu.module.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { itemActions } from "../../../../store/item-slice";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
const ToppingsCurItem = ({ item, type }) => {
  const dispatch = useDispatch();
  const item1 = useSelector((state) => state.item.item);
  const router = useRouter();
  const [isPresent, setIsPresent] = useState(false);

  const id = router.query.toppingId;

  useEffect(() => {
    setIsPresent(
      item1.toppings.find((element) => element.id == id) ? true : false
    );
  }, [id, item1]);

  const backButtonHandler = () => {
    console.log("back button clicked");
  };

  const onchoosen = async () => {
    console.log(item1);
    dispatch(itemActions.addPropsToItem({ type: "TOPPINGS", item: item }));
    console.log(item1);
  };

  const onComplete = async () => {
    router.push("/complete");
    console.log(item1);
  };

  return (
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