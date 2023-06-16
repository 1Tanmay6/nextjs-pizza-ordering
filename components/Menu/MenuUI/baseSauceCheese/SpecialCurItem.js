import classes from "../../Menu.module.css";
import Image from "next/image";

const BaseSaucecheeseSpecialCurItem = ({ type }) => {
  return (
    <div className={classes.curItem}>
      <div className={classes.itemImage}>
        <Image
          src={"/images/icons/special.png"}
          alt="item image"
          width={500}
          height={600}
        />
      </div>
      <div className={classes.itemInfo}>
        <div className={classes.itemName}>choose a {type}</div>
        <div className={`${classes.itemDescription} ${classes.half}`}>
          <p style={{ fontSize: "21px", fontStyle: "italic" }}>
            `Crafted with the finest ingredients, our pizza {type.toLowerCase()}{" "}
            provide the perfect foundation for a delicious and satisfying meal.`
          </p>
          <div className={classes["button-div"]}>
            <button className={classes["btn-main"]} disabled={true}>
              Choose
            </button>
          </div>
          <div className={classes["option-button-div"]}>
            <button className={classes["option-btn"]}>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseSaucecheeseSpecialCurItem;
