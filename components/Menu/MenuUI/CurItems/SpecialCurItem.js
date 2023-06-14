import { useRouter } from "next/router";
import classes from "../../Menu.module.css";
import Image from "next/image";

const SpecialCurItem = ({ item }) => {
  const router = useRouter();

  const onbackHandler = () => {
    router.push("/");
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
            <button className={classes["btn-main"]} disabled={true}>
              Choose
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
