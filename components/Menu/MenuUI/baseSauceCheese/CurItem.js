import classes from "../../Menu.module.css";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { itemActions } from "../../../../store/item-slice";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
const BaseSauceCheeseCurItem = ({ item, type, pushingTo }) => {
  const dispatch = useDispatch();

  const router = useRouter();
  const backButtonHandler = () => {
    console.log("back button clicked");
  };

  const onchoosen = async () => {
    dispatch(itemActions.addPropsToItem({ type: type, item: item }));
    router.push(`/${pushingTo}/`);
  };

  return (
    <div className={classes.curItem}>
      <div className={classes.itemImage}>
        <img src={item.image} alt="item image" width={500} height={600}></img>
      </div>
      <div className={classes.itemInfo}>
        <div className={classes.itemName}>{item.name}</div>
        <div className={`${classes.itemDescription} ${classes.half}`}>
          <p style={{ fontSize: "21px", fontStyle: "italic" }}>
            {item.description}
          </p>

          <div className={classes["button-div"]}>
            <button className={classes["btn-main"]} onClick={onchoosen}>
              Choose
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

export default BaseSauceCheeseCurItem;
