import React, { Component } from "react";
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import BudgetySidebarTop from "./BudgetySidebarTop";
import BudgetySidebarMenu from "./BudgetySidebarMenu";
import BudgetySidebarBottom from "./BudgetySidebarBottom";

class BudgetySidebar extends Component {

  render() {
    const { sidebarIsClosed } = this.props.layout;
    return (
      <div className={sidebarIsClosed ? `BudgetySidebar isClosed` : `BudgetySidebar isOpen`}>
        <BudgetySidebarTop/>
        <BudgetySidebarMenu/>
        <BudgetySidebarBottom/>
      </div>
    );
  }
}
BudgetySidebarTop.propTypes = {
  layout: PropTypes.object,
  toggleSidebar: PropTypes.func
}

const mapStateToProps = state => {
  return {
    layout: state.layout
  };
};

export default connect(mapStateToProps)(BudgetySidebar);
