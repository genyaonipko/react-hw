import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";
import ProtectedRoute from "./ProtectedRoute";
import "./App.css";

class App extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <ProtectedRoute
            exact
            path="/profile"
            component={Profile}
            redirectTo="/login"
            authenticated={authenticated}
          />
          <ProtectedRoute
            exact
            path="/dashboard"
            component={Dashboard}
            redirectTo="/login"
            authenticated={authenticated}
          />
          <Redirect to="/login" />
        </Switch>
      </div>
    );
  }
}

const mapState = state => ({
  authenticated: state.mainReducer.authenticated
});

export default connect(
  mapState,
  null
)(App);
