import classes from "./About.module.css";

const AboutComponents = () => {
  return (
    <section>
      <div className={classes["contain-black"]}>
        <p className={classes["inner-text-prop"]}>
          In 1950, two brothers named Tony and Mario opened a small pizza shop
          in the heart of New York City. They had learned the art of pizza
          making from their grandmother in Naples, Italy and brought their
          family recipes to America. Their pizza quickly became popular among
          the locals and soon they were able to expand their business. Over the
          years, they opened several more locations throughout the city and
          eventually franchised their brand. Today, Tony and Mario’s Pizza is a
          beloved institution with locations all over the world. Their secret to
          success? Using only the freshest ingredients and staying true to their
          family’s traditional recipes.🍕
        </p>
      </div>
    </section>
  );
};

export default AboutComponents;
