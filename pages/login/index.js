import { useEffect } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useRouter } from "next/router";
import Modal from "../../components/UI/Modal";
import Image from "next/image";
import MainScreen from "../../components/MainPage/MainScreen";

const loginsignup = () => {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("login-token") == 1) {
      router.back();
    }
  }, []);
  return (
    <div>
      <MainScreen />
      <Modal title="Sign Up">
        <LoginForm />
      </Modal>
    </div>
  );
};

export default loginsignup;
