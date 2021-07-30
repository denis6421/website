import React, { Component } from "react";
import ProjectPageSlider from "./parts/ProjectPageSlider";
import Footer from "../parts/Footer";
import { text } from "../../text/text";
import { wait, getTech } from "../../functions/functions";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import CodeIcon from '@material-ui/icons/Code';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

class Project extends Component {
  constructor() {
    super();
    this.state = {
      hide_arrow: true,
    };
  }

  changeProject = () => {
    this.setState({
      hide_arrow: true,
    });
    wait(200).then(() => {
      this.setState({
        hide: true,
        active: false,
      });
    });
    wait(600).then(() => {
      this.props.nextProject();
    });
  };
  componentDidMount() {
    wait(50).then(() => {
      this.setState({
        active: true,
      });
    });
    wait(400).then(() => {
      this.setState({
        hide_arrow: false,
      });
    });
  }
  render() {
    const { project, projects_length, index } = this.props;
    const { hide_arrow, hide, active } = this.state;
    return (
      <div
        style={{
          opacity: hide ? 0 : 1,
        }}
        className="project__page__project flex__column"
      >
         <Fade>
         <header className="flex__start">
       
          <h2>{project.name}</h2>
         
          <aside className="flex__center">
            {`${index + 1}/${projects_length}`}
          </aside>
        </header>
         </Fade>
        
       
       <Fade
       
       >
       <button className="flex__center" id="project__btn">
         <a href ={project.live_url} target='_blank'>
         {text.VISIT_WEBSITE}
         </a>
        </button>
       </Fade>
       

        <button
          onClick={() => this.changeProject()}
          id={hide_arrow ? "next__project--hidden" : ""}
          className="next__project"
        ></button>
        <Fade
        enter = {true}
        >
        <ProjectPageSlider images={project.images} />
        </Fade>
       <Fade
         enter = {true}
       >
       <section className="project__page__project__about flex__start">
          <figure className='flex__center'>
           <PriorityHighIcon />
          </figure>
          <div>
            <h3>{text.ABOUT_PROJECT}</h3>
            <p>{project.text}</p>
          </div>
        </section>
       </Fade>
        <Fade
         enter = {true}
        >
        <section className="project__page__project__about flex__start">
          <figure className='flex__center'>
           <CodeIcon />
          </figure>
          <div>
            <h3>{text.TECHNICAL_SHEET}</h3>
            <p>{text.TECHNICAL_SHEET_P}</p>
            <ul className="flex__start">
              {getTech(project.tech).map((m, i) => {
                return (
                  <li key={i} className="flex__column">
                    <figure>
                      <img src={m.img} alt="" />
                    </figure>
                    <h5>{m.name}</h5>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        </Fade>
        <Footer />
      </div>
    );
  }
}

export default Project;
