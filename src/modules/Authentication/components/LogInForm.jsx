import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { loginUser } from "../../../redux/actions/authActions";
import Form from "../../../components/forms/Form";
import InputField from "../../../components/forms/inputs/InputField";
import InputButton from "../../../components/forms/inputs/InputButton";
import {addToastrMessage} from '../../../redux/actions/toastrActions';


class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {
        email: "",
        password: "",
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
    };
    console.log(this.props.history)
    this.props.loginUser(userFields, this.props.history);
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
          <InputButton classes="center" text="Log In" />
          <Link to="/" className="link--underline mt-1">
            Don't have an account? Register now.
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

LogInForm.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { loginUser, addToastrMessage })(withRouter(LogInForm));
