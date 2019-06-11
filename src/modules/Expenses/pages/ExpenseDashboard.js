import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clearErrors } from "../../../redux/actions/accountActions";
import { setCurrentPage } from "../../../redux/actions/layoutActions";
import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import MainContentArea from "../../../components/grid/MainContentArea";
import ExpenseActions from "../modules/ExpenseActions";
import ExpenseList from "../modules/ExpenseList";


class ExpenseDashboard extends Component {
  componentDidMount(){
    this.props.setCurrentPage('expenses');
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
};

const mapStateToProps = state => {
  return {
    errors: state.errors,
    expenses: state.expenses
  };
};
export default connect(
  mapStateToProps,
  { setCurrentPage, clearErrors }
)(ExpenseDashboard);
