import React from "react";
import Image from "next/image";
import classes from "../../Menu.module.css";
import { useRouter } from "next/router";

const ToppingsListItem = ({ item, domain, index }) => {
  const router = useRouter();

  const onNavigateHandler = () => {
    router.push(`/toppings/${item.id}`);
  };
  const text = item.type == "VEG" ? "Veg" : "Non-Veg";
  const className =
    item.type == "VEG"
      ? `${classes["listItem"]} ${classes["veg-listItem"]} }`
      : `${classes["listItem"]} ${classes["non-veg-listItem"]} }`;
  const imageClass = `${classes["image"]} ${classes["round"]}`;
  return (
    <button
      className={className}
      onClick={onNavigateHandler}
      style={{ animationDelay: `${index * 0.075}s` }}
    >
      <div className={imageClass}>
        <img
          src={item.image}
          alt=""
          style={{ borderRadius: "15px", height: "95%", margin: "auto" }}
        />
      </div>
      <div className={classes.vl}></div>
      <div className={classes.container}>
        <div className={classes["container-title"]}>
          <p className={classes["title"]}>{item.name}</p>
        </div>
        <div className={classes["container-description"]}>
          <p className={classes["tags"]}>{text}</p>
          <p className={classes["tags"]}>${item.price}</p>
        </div>
      </div>
    </button>
  );
};

export default ToppingsListItem;
