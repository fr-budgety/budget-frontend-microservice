import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clearErrors } from "../../../redux/actions/accountActions";
import { setCurrentPage } from "../../../redux/actions/layoutActions";
import {getCategories, deleteCategory, toggleAddCategoryModal, toggleEditCategoryModal} from '../../../redux/actions/categoryActions';
import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import MainContentArea from "../../../components/grid/MainContentArea";
import ExpenseActions from "../modules/ExpenseActions";


class ExpenseDashboard extends Component {
  componentDidMount(){
    this.props.setCurrentPage('expenses');
  }
  
  render() {
    return (
      <DashboardLayout title="Expenses">
          <MainContentArea>
            <ExpenseActions/>
          </MainContentArea>      
      </DashboardLayout>
    );
  }
}

ExpenseDashboard.propTypes = {
  errors: PropTypes.object,
  setCurrentPage: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    categories: state.categories,
    errors: state.errors,
  };
};
export default connect(
  mapStateToProps,
  { setCurrentPage, clearErrors,getCategories, deleteCategory, toggleAddCategoryModal, toggleEditCategoryModal }
)(ExpenseDashboard);
