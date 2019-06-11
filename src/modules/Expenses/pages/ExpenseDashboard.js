import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clearErrors } from "../../../redux/actions/accountActions";
import { setCurrentPage } from "../../../redux/actions/layoutActions";
import { getIcons } from '../../../redux/actions/iconActions';
import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import MainContentArea from "../../../components/grid/MainContentArea";
import ExpenseActions from "../modules/ExpenseActions";
import ExpenseList from "../modules/ExpenseList";


class ExpenseDashboard extends Component {
  componentDidMount(){
    this.props.setCurrentPage('expenses');
    this.props.getIcons();
  }

  sortExpenses = (expensesToSort) => {
    return expensesToSort;
  }
  
  render() {
    return (
      <DashboardLayout title="Expenses">
          <MainContentArea>
            <ExpenseActions/>
            <ExpenseList expenses={this.sortExpenses(this.props.expenses)}/>
          </MainContentArea>      
      </DashboardLayout>
    );
  }
}

ExpenseDashboard.propTypes = {
  errors: PropTypes.object,
  setCurrentPage: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  getIcons: PropTypes.func.isRequired,
  icons: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    errors: state.errors,
    expenses: state.expenses,
    icons: state.icons
  };
};
export default connect(
  mapStateToProps,
  { setCurrentPage, clearErrors, getIcons }
)(ExpenseDashboard);
