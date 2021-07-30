import React, { Component } from "react";
import { withRouter } from "react-router";
import { projects_list } from "../Portfolio/projects/projects_list";
import { encodeName, findObjectIndex } from "../../functions/functions";
import Logo from "../../images/logo.svg";
import { text } from "../../text/text";
import Button from "@material-ui/core/Button";
import Project from "./Project";
import BackImg from '../../images/back-arrow.svg'
import {Link} from 'react-router-dom'
import { CONTACT_ROUTE } from "../../tools/routes";
import Fade from 'react-reveal/Fade';

class ProjectPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    let name = this.props.match.params.id;
    window.scrollTo(0,0)
    if (name) {
      name = encodeName(name);
      let selected_project = projects_list.filter((m) => m.name === name)[0];
      let selected_index = findObjectIndex(projects_list,'name', name)
        this.setState({
            selected_project,
            selected_index
        })
    }
  }

  nextProject = () => {
      const {selected_index} = this.state
      this.setState({
        selected_index:selected_index === projects_list.length -1 ? 0 : selected_index + 1 
      })
  }

  backToPortfolio  =() => {
    this.props.history.push('/')
  }

  render() {
      const { selected_index} = this.state
    return (
      <div className="project__page flex__column">
        <header className="project__page__header">
          <Fade
          duration ={400}
          top
          >
          <section className="flex__between">
            <span className="flex__start">
              <figure>
                <img src={Logo} alt="" />
              </figure>
              <h2>{text.NAME}</h2>
            </span>
            <Link to={CONTACT_ROUTE}>
            <Button
              className="main__btn flex__center"
              variant="contained"
              color="primary"
            >
              {text.CONTACT_ME}
            </Button></Link>
          </section>
          </Fade>
          <div className="project__page__header__figure"></div>
          <button 
        onClick = {() => this.backToPortfolio()}
        className='go__back flex__start'>
         <img src={BackImg} alt=""/>
          {text.GO_BACK}
        </button>
        </header>
       
        {projects_list.map((project, index) => {
          if(selected_index === index){
            return (
                <Project
                  project={project}
                  index={index}
                  key={index}
                  projects_length={projects_list.length}
                  nextProject = {this.nextProject}
                />
              );
          }
        })}
      </div>
    );
  }
}

export default withRouter(ProjectPage);
