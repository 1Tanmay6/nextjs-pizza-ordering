import React from "react";
import Image from "next/image";
import classes from "../../Menu.module.css";
import { useRouter } from "next/router";

const ListItem = ({ item, onIdFetcher }) => {
  const router = useRouter();

  const onNavigateHandler = () => {
    router.push(`/menu/${item.id}`);
  };

  const type = item.type == "VEG" ? true : false;
  const className = type
    ? `${classes["listItem"]} ${classes["veg-listItem"]}`
    : `${classes["listItem"]} ${classes["non-veg-listItem"]}`;
  return (
    <button className={className} onClick={onNavigateHandler}>
      <div className={classes.image}>
        <img src={item.image} alt="" />
      </div>
      <div className={classes.vl}></div>
      <div className={classes.container}>
        <div className={classes["container-title"]}>
          <p className={classes["title"]}>{item.name}</p>
        </div>
        <div className={classes["container-description"]}>
          <p className={classes["tags"]}>
            {item.type == "VEG" ? "Veg" : "Non-Veg"}
          </p>
          <p className={classes["tags"]}>${item.price}</p>
        </div>
      </div>
    </button>
  );
};

export default ListItem;
