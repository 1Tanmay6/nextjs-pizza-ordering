import SpecialLoginButtons from "./SpecialLoginButtons";
import TopNavButtons from "./TopNavButtons";
import classes from "./MainScreen.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

const MainScreen = () => {
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
      <button
        className={`${classes["btn-main"]} ${classes["top-nav"]}`}
        onClick={onNavigateLogin}
      >
        Sign Up
      </button>
    </>
  );
};

export default MainScreen;
