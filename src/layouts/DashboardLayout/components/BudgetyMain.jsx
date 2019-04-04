import React, { Component } from "react";
import PropTypes from 'prop-types';
import TopBar from "./topbar/TopBar";

class BudgetyMain extends Component {
  render() {
    return (
      <div className="BudgetyMain">
        <TopBar title={this.props.title} />
        {this.props.children}
      </div>
    );
  }
}

BudgetyMain.propTypes  = {
  children: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}

export default BudgetyMain;
