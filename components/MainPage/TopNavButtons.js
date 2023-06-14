import classes from "./TopNavButtons.module.css";
import { useRouter } from "next/router";

const TopNavButtons = (props) => {
  const router = useRouter();
  const onMenu = () => {
    router.push("/menu");
  };
  return (
    <div
      className={classes["option-button-div"]}
      style={{ justifyContent: "space-evenly" }}
    >
      <button className={classes["option-btn"]}>Home</button>
      <button className={classes["option-btn"]} onClick={onMenu}>
        Menu
      </button>
      <button className={classes["option-btn"]} onClick={props.onClickAbout}>
        About Us
      </button>
      <button className={classes["option-btn"]} onClick={props.onClickContact}>
        Contact Us
      </button>
    </div>
  );
};

export default TopNavButtons;
