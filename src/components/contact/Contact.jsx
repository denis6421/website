import React, { Component } from "react";
import { withRouter } from "react-router";
import { text } from "../../text/text";
import BackImg from "../../images/back-arrow.svg";
import { inputs } from "./parts/inputs";
import TextInput from "./parts/TextInput";
import Button from "@material-ui/core/Button";
import { API } from "../../tools/keys";
import axios from 'axios'
import ContactSuccess from "./parts/ContactSuccess";
import SmallLoader from "../../parts/SmallLoader";
import Bounce from 'react-reveal/Bounce';



class Contact extends Component {
  constructor() {
    super();
    this.state = {
      step: 0,
    };
  }

  goBack = () => {
    this.props.history.goBack();
  };

  updateState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      validate: true,
    });
    setTimeout(() => {
      this.setState({
        validate: false,
      });
      const errors = document.querySelectorAll(".contact__input__error");
      if (errors.length === 0) {
        if (step == inputs.length - 1) {
          this.submitForm();
        } else {
          this.setState({
            step: step + 1,
          });
        }
      }
    }, 50);
  };

  submitForm = () => {
    const { name, email, message } = this.state;
   
      let body = {
        name,
        email,
        message,
      };
      this.setState({
        loading: true,
      });

      setTimeout(() => {
        this.setState({
          success: name,
          loading: false,
        });
       }, 2000);
      axios
        .post(`${API}/portfolio/contact`, body)  
  };
 
  render() {
    const { step, validate, success, loading } = this.state;
    return (
    <div className='contact'>
         {success ? <ContactSuccess
          username = {success}
          />  :''}
          <div 
          style ={{
              filter:success  ?'blur(4px)' : ''
          }}
          className="contact__form">
         
       <Bounce
       
       top>
         <>
       <button
          className="go__back"
          onClick={() => this.goBack()}
          type="button"
        >
          <img src={BackImg} alt="" />
          {text.GO_BACK}
        </button>
        <h2>{text.GET_IN_TOUCH}</h2>
        <p>
          {`${text.CONTACT_P} `}
          <a href="mailto:denis.b651@gmail.com">denis.b651@gmail.com</a>
        </p>
        {inputs.map((input, i) => {
          if (i <= step) {
            return (
              <TextInput
                key={i}
                placeholder={text[input.placeholder]}
                value={this.state[input.property_name]}
                property_name={input.property_name}
                updateParent={this.updateState}
                validation_text={text[input.validation_text]}
                required_error={text.REQUIRED}
                img={input.img}
                validation_type={input.validation_type}
                validate={validate}
              />
            );
          }
        })}
        <div className="contact__submit__btns">
          {
          !loading ? 
          step < 2 ? (
            <Button
              type="button"
              className="main__btn"
              onClick={() => this.nextStep()}
              variant="contained"
              color="primary"
            >
              {text.NEXT}
            </Button>
          ) : (
            <Button
              onClick={() => this.nextStep()}
              className="main__btn"
              type="button"
              variant="contained"
              color="primary"
            >
              {text.SUBMIT}
            </Button>
          ) : <SmallLoader />}
        </div>
        </>
       </Bounce>
      </div>
    </div>
    );
  }
}

export default withRouter(Contact);
