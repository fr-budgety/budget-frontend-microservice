import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clearErrors } from "../../../redux/actions/accountActions";
import { setCurrentPage } from "../../../redux/actions/layoutActions";
import {getCategories} from '../../../redux/actions/categoryActions';
import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import MainContentArea from "../../../components/grid/MainContentArea";
import CategoriesList from "../components/CategoriesList";


class AccountsDashboard extends Component {
  
  componentDidMount() {
    this.props.setCurrentPage("categories");
    this.props.getCategories();
  }
  render() {
    return (
      <DashboardLayout title="Categories">
          <MainContentArea>
           <CategoriesList/>
          </MainContentArea>
      </DashboardLayout>
    );
  }
}

AccountsDashboard.propTypes = {
  errors: PropTypes.object,
  setCurrentPage: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    categories: state.categories,
    errors: state.errors
  };
};
export default connect(
  mapStateToProps,
  { setCurrentPage, clearErrors,getCategories }
)(AccountsDashboard);
