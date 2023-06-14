import classes from "../../Menu.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CurItem = ({ item }) => {
  const router = useRouter();

  const type = item.type == "VEG" ? true : false;
  const className = type
    ? `${classes.inner} ${classes.veg}`
    : `${classes.inner} ${classes["non-veg"]}`;

  const backButtonHandler = () => {
    console.log("back button clicked");
    router.push("/menu");
  };

  const [isdisabled, setDisabled] = useState(true);

  useEffect(() => {
    const localStorageloginTime = localStorage.getItem("login-time");
    const localStorageloginToken = localStorage.getItem("login-token");
    const hoursPassed =
      Math.abs(new Date() - new Date(localStorageloginTime)) / 36e5;

    console.log(hoursPassed);
    if (localStorageloginToken == 1 && hoursPassed < 1) {
      setDisabled(false);
    } else if (localStorageloginToken == 1 && hoursPassed >= 1) {
      localStorage.removeItem("login-token");
      localStorage.removeItem("login-time");

      setDisabled(true);
      router.reload();
    }
    console.log(isdisabled);
  }, []);

  return (
    <div className={classes.curItem}>
      <div className={classes.itemImage}>
        <Image src={item.image} alt="item image" width={600} height={600} />
      </div>
      <div className={classes.itemInfo}>
        <div className={classes.itemName}>{item.name}</div>
        <div className={classes.itemDescription}>
          <div className={classes.outer}>
            <div className={className}>
              <p>{type ? "Veg" : "Non-Veg"}</p>
            </div>
            <div className={classes.inner}>
              <p>{item.calories} cal</p>
            </div>
            <div className={classes.inner}>
              <p>${item.price}</p>
            </div>
          </div>
          <div className={classes["button-div"]}>
            <button className={classes["btn-main"]} disabled={isdisabled}>
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

export default CurItem;
