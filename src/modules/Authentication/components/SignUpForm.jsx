import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../../redux/actions/authActions";
import Form from "../../../components/forms/Form";
import InputField from "../../../components/forms/inputs/InputField";
import InputButton from "../../../components/forms/inputs/InputButton";
import CheckboxField from "../../../components/forms/inputs/CheckboxField";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password2: "",
      agreeIsChecked: false,
      errors: {
        email: "",
        agreeIsChecked: "",
        password: "",
        password2: "",
        terms: ""
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    //Check if there is any error on submission and return it to the errors state
    if (nextProps.errors !== this.state.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  //Handle Form Change
  handleChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      ...this.state,
      [name]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const userFields = {
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      terms: this.state.agreeIsChecked
    };
    this.props.registerUser(userFields, this.props.history);
  };

  render() {
    return (
      <div className="sign-form full-width">
        <Form action={this.handleSubmit}>
          <InputField
            classes="full-width"
            error={this.state.errors.email}
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email"
          />
          <InputField
            classes="full-width"
            error={this.state.errors.password}
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <InputField
            classes="full-width"
            error={this.state.errors.password2}
            type="password"
            name="password2"
            value={this.state.password2}
            onChange={this.handleChange}
            placeholder="Confirm password"
          />
          <CheckboxField
            name="agreeIsChecked"
            checked={this.state.agreeIsChecked}
            onChange={this.handleChange}
            error={this.state.errors.terms}
          >
            I agree with{" "}
            <Link to="/privacy" className="link--strong">
              terms and conditions
            </Link>
          </CheckboxField>
          <InputButton classes="center" text="Sign up" />
          <Link to="/login" className="link--underline mt-1">
            Already have an account? Sign in.
          </Link>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //Come from rootReducer
  auth: state.auth,
  errors: state.errors
});

SignUpForm.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(SignUpForm));
