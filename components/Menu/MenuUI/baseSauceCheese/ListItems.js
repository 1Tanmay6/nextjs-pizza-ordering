import React from "react";
import classes from "../../Menu.module.css";
import BaseSauceCheeseListItem from "./ListItem";
const BaseSauceCheeseListItems = (props) => {
  return (
    <div className={classes.listItems}>
      {props.items.map((element) => {
        // return <ListItem key={element.id} item={element} />;
        return (
          <BaseSauceCheeseListItem
            key={element.id}
            item={element}
            domain={props.domain}
          />
        );
      })}
      <br />
    </div>
  );
};

export default BaseSauceCheeseListItems;
