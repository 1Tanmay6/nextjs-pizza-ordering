import React, { useState, useEffect } from "react";
import styles from "./Notification.module.css";

const Notification = ({ message }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    const timeout = setTimeout(() => {
      setVisible(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`${styles.notification} ${visible ? styles.show : ""}`}>
      <span className={styles.message}>{message}</span>
    </div>
  );
};

export default Notification;
