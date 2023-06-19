import React from "react";
import classes from "../../Menu.module.css";
import ListItem from "./ListItem";
const ListItems = (props) => {
  return (
    <div className={classes.listItems}>
      {props.items.map((element, index) => {
        return <ListItem key={element.id} item={element} index={index} />;
      })}
      <br />
    </div>
  );
};

export default ListItems;
