import React, { Component } from "react";
import PropTypes from "prop-types";
import BudgetySidebar from "./components/sidebar/BudgetySidebar";
import BudgetyMain from "./components/BudgetyMain";

class DashboardLayout extends Component {
  render() {
    return (
      <div className="DashboardLayout" id="budgety-ui">
        <BudgetySidebar />
        <BudgetyMain title={this.props.title || ''}>
			{this.props.children}
		</BudgetyMain>
      </div>
    );
  }
}
BudgetySidebar.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.object
};

export default DashboardLayout;
