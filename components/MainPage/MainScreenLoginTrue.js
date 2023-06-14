import SpecialLoginButtons from "./SpecialLoginButtons";
import TopNavButtons from "./TopNavButtons";
import classes from "./MainScreenLoginTrue.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const MainScreenAfterLogin = () => {
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
      <button className={`${classes["btn-main"]} ${classes["top-nav"]}`}>
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
      </button>
    </>
  );
};

export default MainScreenAfterLogin;
