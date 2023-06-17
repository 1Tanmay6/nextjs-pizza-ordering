import React from "react";
import classes from "../../Menu.module.css";
import ToppingsListItem from "./ListItem";
const ToppingsListItems = (props) => {
  return (
    <div className={classes.listItems}>
      {props.items.map((element) => {
        // return <ListItem key={element.id} item={element} />;
        return (
          <ToppingsListItem
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

export default ToppingsListItems;
