import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import classes from "./SpecialLoginButtons.module.css";

const SpecialLoginButtons = (props) => {
  const router = useRouter();
  const [child, setChild] = useState(false);
  const onMenu = () => {
    router.push("/menu");
  };

  useEffect(() => {
    if (localStorage.getItem("login-token") == 1) {
      setChild(true);
    }
  }, []);
  const classForMenu = `${classes["special-btn"]} ${classes["animate"]}`;

  return (
    <div className={classes["main-btn-div"]}>
      <div className={classes["button-div"]}>
        {child == 1 ? (
          <button className={classes["btn-main"]}>Offers</button>
        ) : (
          <button className={classes["btn-main"]} onClick={props.onNavigate}>
            Sign Up
          </button>
        )}
        <button className={classForMenu} onClick={onMenu}>
          Menu
        </button>
      </div>
    </div>
  );
};

export default SpecialLoginButtons;
