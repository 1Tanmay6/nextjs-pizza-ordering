import { useEffect, useState } from "react";
import MainScreen from "../components/MainPage/MainScreen";
import MainScreenAfterLogin from "../components/MainPage/MainScreenLoginTrue";
import { useRouter } from "next/router";
const HomePage = () => {
  const [child, setChild] = useState(<MainScreen />);
  const router = useRouter();

  useEffect(() => {
    const localStorageloginTime = localStorage.getItem("login-time");
    const localStorageloginToken = localStorage.getItem("login-token");
    const hoursPassed =
      Math.abs(new Date() - new Date(localStorageloginTime)) / 36e5;

    console.log(hoursPassed);
    if (localStorageloginToken == 1 && hoursPassed < 1) {
      setChild(<MainScreenAfterLogin />);
    } else if (localStorageloginToken == 1 && hoursPassed >= 1) {
      localStorage.removeItem("login-token");
      localStorage.removeItem("login-time");

      setChild(<MainScreen />);
      router.reload();
    }
    console.log(child);
  }, []);

  return child;
};
export default HomePage;
