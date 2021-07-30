import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Button from "@material-ui/core/Button";
import ArrowImg from "../../../../images/arrow.svg";
import { text } from "../../../../text/text";
import Bounce from "react-reveal/Bounce";

class ProjectDetails extends Component {
    constructor(){
        super()
        this.state = {

        }
    }
    componentDidMount(){
     
    }
    
  render() {
    const { project } = this.props;
    const {loaded} = this.state
    return (
        <div
        style ={{
            opacity:loaded ?1  :0
        }}
        className="portfolio__projects__element__details">
          <h3>{project.name}</h3>
          <ul className="flex__start">
            {project.tech.map((m, index) => {
              return  <li key={index}>{m}</li>
           
            })}
          </ul>
          <Button
            onClick={() => this.props.goToProject(project.name)}
            className="main__btn"
            variant="contained"
            color="primary"
          >
           <h5> {text.VIEW_PROJECT}</h5>
            <img
            onLoad = {() => this.setState({
                loaded:true
            })}
            src={ArrowImg} alt="" />
          </Button>
        </div>
     
    );
  }
}

export default ProjectDetails;
