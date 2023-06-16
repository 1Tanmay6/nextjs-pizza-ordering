import classes from "../../Menu.module.css";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { itemActions } from "../../../../store/item-slice";
import { useSelector } from "react-redux";
const BaseSauceCheeseCurItem = ({ item, type }) => {
  const dispatch = useDispatch();
  const item1 = useSelector((state) => state.item.item);

  const backButtonHandler = () => {
    console.log("back button clicked");
  };

  const onchoosen = async () => {
    dispatch(itemActions.addPropsToItem({ type: type, item: item }));

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
