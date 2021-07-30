import React, { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects_list } from "./projects_list";
import SectionTitle from "../../../parts/SectionTitle";
import { text } from "../../../text/text";
import { wait, decodeName } from "../../../functions/functions";
import KeyboardBackspaceRoundedIcon from "@material-ui/icons/KeyboardBackspaceRounded";
import { withRouter } from "react-router";
import { PROJECT_ROUTE } from "../../../tools/routes";
import ProjectDetails from "./parts/ProjectDetails";
import Fade from "react-reveal/Fade";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1,
      end_index: projects_list.length - 2,
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  componentDidMount() {
    this.setState({
      projects: projects_list,
    });
  }

  moveArrows = () => {
    this.setState({
      hide_arrows: true,
    });
    setTimeout(() => {
      this.setState({
        hide_arrows: false,
      });
    }, 600);
  };

  next() {
    let { selected } = this.state;
    this.moveArrows();
    wait(300).then(() => {
      this.setState(
        {
          selected: selected + 1 === projects_list.length ? 0 : selected + 1,
        },
        () => {
          this.slider.slickNext();
        }
      );
    });
  }
  previous() {
    let { selected } = this.state;
    this.moveArrows();
    wait(300).then(() => {
      this.setState(
        {
          selected: selected === 0 ? projects_list.length - 1 : selected - 1,
        },
        () => {
          this.slider.slickPrev();
        }
      );
    });
  }

  goToProject = (project) => {
    let id = decodeName(project);
    this.props.history.push(PROJECT_ROUTE.replace(":id", id));
  };
  render() {
    const { selected, projects, hide_arrows } = this.state;

    var settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      touchMove: false,
      slidesToScroll: 1,
    };
    return (
      <Fade enter>
        <div className="portfolio__projects">
          <SectionTitle title={text.PROJECTS} />
          <button
            id={hide_arrows ? "left__arrow--hide" : ""}
            className="slider__arrows left__arrow flex__center"
            onClick={this.previous}
          >
            <KeyboardBackspaceRoundedIcon />
          </button>
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {projects && projects.length > 0
              ? projects.map((project, i) => {
                  return (
                    <li
                    key = {i}
                      id={
                        selected === i
                          ? "portfolio__projects__element--active"
                          : ""
                      }
                      className="portfolio__projects__element"
                    >
                      <figure>
                        <img src={project.main_image} alt="" />
                      </figure>
                      {selected === i ? (
                        <ProjectDetails
                          project={project}
                          goToProject={this.goToProject}
                        />
                      ) : (
                        ""
                      )}
                    </li>
                  );
                })
              : ""}
          </Slider>
          <button
            id={hide_arrows ? "right__arrow--hide" : ""}
            className="slider__arrows right__arrow flex__center"
            onClick={this.next}
          >
            <KeyboardBackspaceRoundedIcon />
          </button>
        </div>
      </Fade>
    );
  }
}

export default withRouter(Projects);
