import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { skills_list } from "./skills_list";
import SectionTitle from "../../../parts/SectionTitle";

const Skills = () => {
  return (
    <Fade
    enter = {true}
   
    >
      <div className="portfolio__skills">
        <SectionTitle title="Skills" />
        <ul className="flex__between">
          {skills_list && skills_list.length > 0
            ? skills_list.map((skill, i) => {
                return (
                  <li 
                  key = {i}
                  className="flex__column">
                    <figure>
                      <img src={skill.img} alt="" />
                    </figure>
                    <h5>{skill.name}</h5>
                  </li>
                );
              })
            : ""}
        </ul>
      </div>
    </Fade>
  );
};
export default Skills;
