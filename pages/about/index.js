import { Fragment, useState, useEffect } from "react";
import AboutComponents from "../../components/About/About";
import MainScreen from "../../components/MainPage/MainScreen";
import Modal from "../../components/UI/Modal";
import MainScreenAfterLogin from "../../components/MainPage/MainScreenLoginTrue";

const About = () => {
  const [child, setChild] = useState(<MainScreen />);

  useEffect(() => {
    if (localStorage.getItem("login-token") == 1) {
      setChild(<MainScreenAfterLogin />);
    }
  }, []);
  return (
    <Fragment>
      {child}
      <Modal title="About Us">
        <AboutComponents />
      </Modal>
    </Fragment>
  );
};

export default About;
