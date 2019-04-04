import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { toggleSidebar } from "../../../../redux/actions/layoutActions";
import Logo from "../../../../components/logo/Logo";
import BurgerIcon from "../../../../components/buttons/BurgerIcon";

class BudgetySidebarTop extends Component {
  handleCloseSidebar = () => {
    this.props.toggleSidebar();
  }
  render() {
    
    return (
      <div className="BudgetySidebar--logo">
        <Logo width="115" type="alt" />
        <div className="BudgetySidebar--BurgerIcon CloseSidebarButton" onClick={this.handleCloseSidebar}>
          <BurgerIcon type="close" />
        </div>
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
  
export default connect( mapStateToProps, { toggleSidebar })(BudgetySidebarTop);
  
