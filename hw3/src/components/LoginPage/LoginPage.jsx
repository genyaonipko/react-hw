import React, { Component } from "react";
import { connect } from "react-redux";
import { signUserIn } from "../../redux/actions/inform";
import "./LoginPage.css";

class LoginPage extends Component {
  state = {
    login: "",
    password: ""
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmitObj({ ...this.state });
  };

  render() {
    return (
      <form className="login-page" onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleInput}
          name="login"
          placeholder="Login"
          type="text"
        />
        <input
          onChange={this.handleInput}
          name="password"
          placeholder="Password"
          type="password"
        />
        <button type="submit">Login</button>
      </form>
    );
  }
}

const mapDispatch = dispatch => ({
  onSubmitObj: obj => dispatch(signUserIn(obj))
});

export default connect(
  null,
  mapDispatch
)(LoginPage);
