import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { text } from "../../text/text";
import Logo from "../../images/logo.svg";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Footer from "../parts/Footer";
import { CONTACT_ROUTE } from "../../tools/routes";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";

class Portolio extends Component {
  componentWillMount() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 150);
  }



  scrollTest = () => {
      let element = document.querySelector('.portfolio__skills')
      element.scrollIntoView({
        behavior:'smooth'
      })
  }
  goToContact = () => {
    this.props.history.push(CONTACT_ROUTE)
  }
  render() {
    return (
      <div className="portfolio">
        <header className="portfolio__header">
          <aside className="portfolio__header__figure"></aside>
          <Fade>
            <figure className="portfolio__header__logo">
              <img src={Logo} alt="" />
            </figure>
          </Fade>
          <Fade delay={300}>
            <h1>{text.NAME}</h1>
          </Fade>
          <Fade delay={600}>
            <p>
              {`${text.ABOUT_ME1} `}
              <strong>{text.ABOUT_ME2}</strong>
              {` ${text.ABOUT_ME3}`}
            </p>
          </Fade>
         
            <Fade bottom duration={500} delay={900}>
              <Button 
              onClick = {() => this.goToContact()}
              className="main__btn" variant="contained" color="primary">
             {text.CONTACT_ME}

              </Button>
            </Fade>
         

          <section
          onClick = {() => this.scrollTest()}
          className="portfolio__header__toggle">
            <figure></figure>
          </section>
        </header>
        <Skills />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default Portolio;
