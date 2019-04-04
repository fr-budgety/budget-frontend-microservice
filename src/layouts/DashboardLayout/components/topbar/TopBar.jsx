import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { toggleSidebar } from "../../../../redux/actions/layoutActions";
import BurgerIcon from "../../../../components/buttons/BurgerIcon";
import Title from "../../../../components/typography/Title";
import GlobalActions from "./GlobalActions";

class TopBar extends Component {
  handleCloseSidebar = () => {
    this.props.toggleSidebar();
  };
  render() {
    const { sidebarIsClosed } = this.props.layout;
    return (
      <div className="BudgetyMain--TopBar">
        <div className="BudgetyMain--TopBar--Title">
          {sidebarIsClosed && 
            <div className="BudgetySidebar--BurgerIcon ExpandSidebarButton" onClick={this.handleCloseSidebar}>
              <BurgerIcon />
            </div>
          }
          <Title variant="dashboardTitle" color="#43425D" className="no-mt">
            {this.props.title}
          </Title>
        </div>
        <GlobalActions/>
      </div>
    );
  }
}

TopBar.propTypes = {
  layout: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  toggleSidebar: PropTypes.func.isRequired
}
const mapStateToProps = state => {
  return {
    layout: state.layout
  };
};
export default connect(
  mapStateToProps,
  { toggleSidebar }
)(TopBar);
