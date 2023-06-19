import SpecialLoginButtons from "./SpecialLoginButtons";
import TopNavButtons from "./TopNavButtons";
import classes from "./MainScreenLoginTrue.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MainScreenAfterLogin = () => {
  const [cartNum, setCartNum] = useState(0);
  useEffect(() => {
    const getter = async () => {
      const response = await fetch("/api/pizza", {
        method: "GET",
      });
      const data = await response.json();
      setCartNum(data.result.items.length);
    };
    getter();
  }, [cartNum]);

  const router = useRouter();

  const onNavigateLogin = () => {
    router.push("/login");
  };

  const onNavigateAbout = () => {
    router.push("/about");
  };

  const onNavigateContact = () => {
    router.push("/contact");
  };

  const onNavigateCart = () => {
    router.push("/cart");
  };
  return (
    <>
      <Image
        src={"/images/Background.png"}
        width="1920"
        height="1080"
        alt="background"
        priority
      />
      <TopNavButtons
        onClickAbout={onNavigateAbout}
        onClickContact={onNavigateContact}
      />
      <SpecialLoginButtons onNavigate={onNavigateLogin} />
      <button
        className={`${classes["btn-main"]} ${classes["top-nav"]}`}
        onClick={onNavigateCart}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            justifyItems: "center",
            height: "100%",
          }}
        >
          <Image
            src={"/images/icons/cart.png"}
            height="50"
            width="50"
            alt="cart-logo"
            style={{ marginLeft: "1rem" }}
          ></Image>

          <p style={{ fontSize: "25px", marginRight: "1rem" }}>Cart</p>
        </div>
        <div className={classes["badge"]}>
          <p>{cartNum}</p>
        </div>
      </button>
    </>
  );
};

export default MainScreenAfterLogin;
