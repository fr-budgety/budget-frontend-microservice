import React, { Component } from "react";
import RegistrationPage from "./modules/Authentication/pages/RegistrationPage";
import {connect} from 'react-redux';
import LoginPage from "./modules/Authentication/pages/LoginPage";
import PrivacyPage from './modules/Authentication/pages/PrivacyPolicy';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Import Private Route
import PrivateRoute from "./components/PrivateRoute";
//Toastr
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import ReduxToastr from "react-redux-toastr";
import {toastrOutput} from './util/toastrOutput';

//Styles
import "./scss/main.scss";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";
import AccountsDashboard from "./modules/Accounts/pages/AccountsDashboard";
import CategoriesDashboard from "./modules/Categories/pages/CategoriesDashboard";
import ExpenseDashboard from "./modules/Expenses/pages/ExpenseDashboard";
import AddExpense from "./modules/Expenses/pages/AddExpense";


class App extends Component {
  componentWillReceiveProps(nextProps){
    if(nextProps.message !== this.props.message){
      if(nextProps.message!=={}){
        toastrOutput(nextProps.message.type, nextProps.message.title, nextProps.message.message)
      }
    }
  }
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={RegistrationPage} />
            <Route exact path="/login" component={LoginPage} />
            <PrivateRoute exact path="/dashboard" component={DashboardLayout} />
            <PrivateRoute exact path="/accounts" component={AccountsDashboard} />
            <PrivateRoute exact path="/categories" component={CategoriesDashboard} />
            <PrivateRoute exact path="/expenses" component={ExpenseDashboard} />
            <PrivateRoute exact path="/expenses/add" component={AddExpense} />
          </Switch>
        </Router>
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="top-left"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick
        />
        </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    message: state.message
  }
}

export default connect(mapStateToProps)(App);
