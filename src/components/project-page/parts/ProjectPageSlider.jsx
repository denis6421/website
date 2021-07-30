import React, { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardBackspaceRoundedIcon from "@material-ui/icons/KeyboardBackspaceRounded";
import { withRouter } from "react-router";
import { wait } from "../../../functions/functions";

class ProjectPageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }



  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const { hide_arrows } = this.state;
    const { images } = this.props;
    var settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      touchMove: false,
      slidesToScroll: 1,
    };
    return (
      <div className="project__slider">
        <button
          id={hide_arrows ? "left__arrow--hide" : ""}
          className="slider__arrows left__arrow flex__center"
          onClick={this.previous}
        >
          <KeyboardBackspaceRoundedIcon />
        </button>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {images && images.length > 0
            ? images.map((img, i) => {
                return (
                  <div key={i} className='project__slider__element'>
                    <img  src={img} alt="" />
                  </div>
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
    );
  }
}

export default withRouter(ProjectPageSlider);
