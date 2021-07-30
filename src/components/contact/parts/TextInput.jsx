import React, { Component } from "react";
import validator from "validator";

const validateData = (validation, value) => {
  if (validation === "email") {
    return !validator.isEmail(value);
  }
};

class TextInput extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.validate !== this.props.validate) {
      this.onBlur();
    }
  }
  onFocus = () => {
    this.setState({
      active: true,
      validation_error: false,
      is_empty:false
    });
  };

  onBlur = () => {
    const { value, validation_type } = this.props;
    this.setState({
      active: value,
      is_empty:!value
    });
    let validation_error = value ? validateData(validation_type, value) : "";
    console.log(validation_error);
    if (validation_error)
      this.setState({
        validation_error: true,
      });
  };

  onChange = (value) => {
    const { property_name } = this.props;
    this.props.updateParent(property_name, value);
  };
  render() {
    const { active, is_empty, validation_error } = this.state;
    
    const {
      value,
      placeholder,
      required_error,
      img,
      validation_text,
    } = this.props;
    return (
      <div
        id={active ? "contact__input--active" : ""}
        className="contact__input"
      >
        {img}
        <input
          value={value}
          placeholder={placeholder}
          onBlur={() => this.onBlur()}
          onFocus={() => this.onFocus()}
          onChange={(e) => this.onChange(e.target.value)}
          type="text"
        />
        {is_empty ? (
          <h5 className="contact__input__error">{required_error}</h5>
        ) : validation_error ? (
          <h5 className="contact__input__error">{validation_text}</h5>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default TextInput;
