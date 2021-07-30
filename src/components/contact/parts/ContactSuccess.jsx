import React, { Component } from "react";
import SuccessImg from "../../../images/success.png";
import { text } from "../../../text/text";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Fade from 'react-reveal/Fade';

class ContactSuccess extends Component {
  constructor() {
    super();
  }
  render() {
    const { username } = this.props;
    return (
      <Fade
      clear
      >
          <div className="contact__success">
        <section className="contact__success__content flex__column">
          <figure>
            <img src={SuccessImg} alt="" />
          </figure>
          <h3>{text.GOT_IT}</h3>
          <h4>{`${text.THANK_YOU} ${username} ${text.SUCCESS_MSG}`}</h4>
          <Link to={"/"}>
            <Button className="main__btn" variant="contained" color="primary">
              {text.HOMEPAGE}
            </Button>
          </Link>
        </section>
      </div>
      </Fade>
    );
  }
}

export default ContactSuccess;
