import React from "react";
import classes from "../../Menu.module.css";
import BaseSauceCheeseListItem from "./ListItem";
const BaseSauceCheeseListItems = (props) => {
  return (
    <div className={classes.listItems}>
      {props.items.map((element, index) => {
        return (
          <BaseSauceCheeseListItem
            key={element.id}
            item={element}
            domain={props.domain}
            index={index}
          />
        );
      })}
      <br />
    </div>
  );
};

export default BaseSauceCheeseListItems;
