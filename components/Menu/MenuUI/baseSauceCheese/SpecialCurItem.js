import classes from "../../Menu.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const BaseSaucecheeseSpecialCurItem = ({ type }) => {
  const router = useRouter();
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
            <button className={classes["option-btn"]} onClick={router.back}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseSaucecheeseSpecialCurItem;
