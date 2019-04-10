import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clearErrors } from "../../../redux/actions/accountActions";
import { setCurrentPage } from "../../../redux/actions/layoutActions";
import {getCategories, deleteCategory, toggleAddCategoryModal, toggleEditCategoryModal} from '../../../redux/actions/categoryActions';
import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import MainContentArea from "../../../components/grid/MainContentArea";
import CategoriesList from "../components/CategoriesList";
import Confirmation from "../../../components/confirmation/Confirmation";
import Title from "../../../components/typography/Title";
import AddCategory from "../components/AddCategory";
import EditCategory from "../components/EditCategory";



class CategoryDashboard extends Component {
  constructor(props) {
		super(props);
		this.state = {
      deleteConfirmationIsClosed: false,
      addIsActive: false
		};
	}
  componentDidMount() {
    this.props.setCurrentPage("categories");
    this.props.getCategories();
  }

  //Change state and display modal for delete confirmation
	handleToggleConfirmation = () => {
		this.setState({
			deleteConfirmationIsClosed: !this.state.deleteConfirmationIsClosed
		});
  };
  // Delete category from redux state
  handleDeleteCategory = () => {
    this.props.deleteCategory(this.props.categories.deleteCategory);
    this.handleToggleConfirmation();
  };
  //Handle modal add category activation from state
  handleAddCategoryActivation = ()=>{
    const {addCategoryModalIsOpen} = this.props.categories
    const action = !addCategoryModalIsOpen
    this.props.toggleAddCategoryModal(action);
    this.props.clearErrors();
  }
  //Handle modal add category activation from state
  handleEditCategoryActivation = (id)=>{
    const {editCategoryModalIsOpen} = this.props.categories
    const action = !editCategoryModalIsOpen
    this.props.toggleEditCategoryModal(action);
    this.props.clearErrors();
  }
  render() {
    return (
      <DashboardLayout title="Categories">
          <MainContentArea>
           <CategoriesList 
            handleToggleConfirmation={this.handleToggleConfirmation}
            handleAddCategoryActivation={this.handleAddCategoryActivation}
            handleEditCategoryActivation={this.handleEditCategoryActivation}
          />
          </MainContentArea>
          <AddCategory
            handleAddCategoryActivation={this.handleAddCategoryActivation}
            addIsActive={this.state.addIsActive}
          />
          <EditCategory/>
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

CategoryDashboard.propTypes = {
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
)(CategoryDashboard);
