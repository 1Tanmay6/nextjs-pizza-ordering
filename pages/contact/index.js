import { Fragment, useState, useEffect } from "react";
import ContactComponents from "../../components/Contact/Contact";
import MainScreen from "../../components/MainPage/MainScreen";
import Modal from "../../components/UI/Modal";
import MainScreenAfterLogin from "../../components/MainPage/MainScreenLoginTrue";
const Contact = () => {
  const [child, setChild] = useState(<MainScreen />);

  useEffect(() => {
    if (localStorage.getItem("login-token") == 1) {
      setChild(<MainScreenAfterLogin />);
    }
  }, []);
  return (
    <Fragment>
      {child}
      <Modal title="Contact Us">
        <ContactComponents />
      </Modal>
    </Fragment>
  );
};

export default Contact;
