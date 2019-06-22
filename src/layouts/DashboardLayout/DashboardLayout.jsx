import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import LoadingScreen from '../../components/loading/LoadingScreen';
import BudgetySidebar from "./components/sidebar/BudgetySidebar";
import BudgetyMain from "./components/BudgetyMain";

class DashboardLayout extends Component {
  render() {
    const {isLoading} = this.props.auth;
    return (
      <React.Fragment>
        {isLoading && <LoadingScreen />}
        <div className="DashboardLayout" id="budgety-ui">
          <BudgetySidebar />
          <BudgetyMain title={this.props.title || ''}>
            {this.props.children}
          </BudgetyMain>
        </div>
      </React.Fragment>
    );
  }
}
BudgetySidebar.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.object,
  auth: PropTypes.object
};
const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(DashboardLayout);
