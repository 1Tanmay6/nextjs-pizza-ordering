import React from "react";
import classes from "../../Menu.module.css";
import ListItem from "./ListItem";
const ListItems = (props) => {
  return (
    <div className={classes.listItems}>
      {props.items.map((element) => {
        return <ListItem item={element} onIdFetcher={props.onFetch} />;
      })}
      <br />
    </div>
  );
};

export default ListItems;
