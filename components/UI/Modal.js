import React from "react";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <>
      <div className={classes.backdrop}> </div>
      <div className={classes.overlay}>
        <p className={classes.title}>{props.title}</p>
        {props.children}
      </div>
    </>
  );
};

export default Modal;
