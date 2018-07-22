import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signUserOut } from "../../redux/actions/inform";
import "./Header.css";

class Header extends Component {
  render() {
    const { authenticated, user, onLogout } = this.props;
    console.log(user);
    return (
      <div className="header">
        <div className="left-side">
          {authenticated ? (
            <Fragment>
              <button
                className="button-logout"
                onClick={onLogout}
                type="submit"
              >
                Logout
              </button>
              <div className="avatar">
                <img src={user.avatar} width="42" height="42" alt="avatar" />
                <span>{user.name}</span>
              </div>
            </Fragment>
          ) : (
            ""
          )}
        </div>
        <div className="right-side">
          {authenticated ? (
            <Fragment>
              <NavLink
                exact
                activeClassName="button-active"
                to="/"
                className="button-home"
              >
                Home
              </NavLink>
              <NavLink
                activeClassName="button-active"
                to="/profile"
                className="button-prof"
              >
                Profile
              </NavLink>
              <NavLink
                activeClassName="button-active"
                to="/dashboard"
                className="button-dash"
              >
                Dashboard
              </NavLink>
            </Fragment>
          ) : (
            <Fragment>
              <NavLink
                activeClassName="button-active"
                to="/login"
                className="button-login"
              >
                Login
              </NavLink>
              <NavLink
                exact
                activeClassName="button-active"
                to="/"
                className="button-home"
              >
                Home
              </NavLink>
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  authenticated: state.mainReducer.authenticated,
  user: state.mainReducer.user
});

const mapDispatch = dispatch => ({
  onLogout: () => dispatch(signUserOut())
});

export default connect(
  mapState,
  mapDispatch
)(Header);
