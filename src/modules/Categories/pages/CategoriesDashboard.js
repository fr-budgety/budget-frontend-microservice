import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clearErrors } from "../../../redux/actions/accountActions";
import { setCurrentPage } from "../../../redux/actions/layoutActions";
import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import MainContentArea from "../../../components/grid/MainContentArea";


class AccountsDashboard extends Component {
  
  componentDidMount() {
    this.props.setCurrentPage("categories");
  }

  render() {
    return (
      <DashboardLayout title="Categories">
          <MainContentArea>
           main
          </MainContentArea>
      </DashboardLayout>
    );
  }
}

AccountsDashboard.propTypes = {
  errors: PropTypes.object,
  setCurrentPage: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    errors: state.errors
  };
};
export default connect(
  mapStateToProps,
  { setCurrentPage, clearErrors }
)(AccountsDashboard);
