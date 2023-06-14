import classes from "./Contact.module.css";

const ContactComponents = () => {
  return (
    <div className={classes["contain-black"]}>
      <p className={classes["inner-title"]}>Phone</p>
      <p className={classes["inner-text-prop"]}>(123) 456-7890</p>
      <br />
      <p className={classes["inner-title"]}>Landline</p>
      <p className={classes["inner-text-prop"]}>(098) 765-4321</p>
      <br />
      <p className={classes["inner-title"]}>Email</p>
      <p className={classes["inner-text-prop"]}> info@pizzeria.com</p>
    </div>
  );
};

export default ContactComponents;
