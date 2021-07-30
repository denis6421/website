import React from "react";
import Fade from "react-reveal/Fade";

const SectionTitle = (props) => {
  const { title } = props;

  return (
    <Fade>
      <section className="section__title">
        <h3>{title}</h3>
        <figure></figure>
      </section>
    </Fade>
  );
};

export default SectionTitle