import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clearErrors } from "../../../redux/actions/accountActions";
import { setCurrentPage } from "../../../redux/actions/layoutActions";
import {getCategories, deleteCategory, toggleAddCategoryModal, toggleEditCategoryModal} from '../../../redux/actions/categoryActions';
import { getIcons } from '../../../redux/actions/iconActions';
import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import MainContentArea from "../../../components/grid/MainContentArea";
import ExpenseActions from "../modules/ExpenseActions";
import ExpenseList from "../modules/ExpenseList";
import Confirmation from "../../../components/confirmation/Confirmation";
import Title from "../../../components/typography/Title";



class ExpenseDashboard extends Component {
  constructor(props) {
		super(props);
		this.state = {
      deleteConfirmationIsClosed: false,
      addIsActive: false
		};
  }

  componentDidMount() {
    this.props.setCurrentPage('expenses');
    this.props.getIcons();
  }

  sortExpenses = (expensesToSort) => {
    return expensesToSort;
  }

  //Change state and display modal for delete confirmation
	handleToggleConfirmation = () => {
		this.setState({
			deleteConfirmationIsClosed: !this.state.deleteConfirmationIsClosed
		});
  };

  //Handle modal add category activation from state
  handleAddCategoryActivation = ()=>{
    const {addCategoryModalIsOpen} = this.props.categories
    const action = !addCategoryModalIsOpen
    this.props.toggleAddCategoryModal(action);
    this.props.clearErrors();
  }

  render() {
    return (
      <DashboardLayout title="Expenses">
        <MainContentArea>
          <ExpenseActions />
          <ExpenseList
            expenses={this.sortExpenses(this.props.expenses)}
            handleToggleConfirmation={this.handleToggleConfirmation}
            />
        </MainContentArea>
        <Confirmation
          visible={this.state.deleteConfirmationIsClosed}
          onConfirmationModalClose={this.handleToggleConfirmation}
          handleConfirmationCallback={this.handleDeleteCategory}
        >
          <Title variant="h2" color="alt">
            Are you sure you want to delete this category?
					</Title>
          <p className="darkColorAlt">You will delete this category and all related expenses.</p>
        </Confirmation>
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
  { setCurrentPage, clearErrors, getIcons, toggleAddCategoryModal }
)(ExpenseDashboard);
