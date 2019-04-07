import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { filterCats } from "../../../redux/actions/categoryActions";
import Paper from "../../../components/grid/Paper";
import Title from "../../../components/typography/Title";
import SectionArea from "../../../components/grid/SectionArea";
import CategoryItem from "./CategoryItem";

class CategoriesList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      activeType: 'expenses'
    }
  }

  switchType = () => {
    const newType = this.state.activeType === 'expenses' ? 'incomes' : 'expenses';
    this.setState({
      ...this.state,
      activeType: newType
    })
  }
  handleEditActivation = _id => {
    this.props.handleEditActivation(_id);
  };
  filterCategoryByType = (initialArr, type) => {
    const newArr = initialArr.filter(item => item.type === type);
    return newArr;
  };
  render() {
    const { categories } = this.props.categories;
    const expenseCategories = this.filterCategoryByType(categories, "expense");
    const incomeCategories = this.filterCategoryByType(categories, "income");
    const renderIncome = (type) => {
      if (type === 'expenses'){
        if (typeof expenseCategories !== "undefined" && expenseCategories.length>0){
          return (
            expenseCategories.map(category => (<CategoryItem item={category}/>))
          )
        }
        else {
          return(<p className="mt-2 mb-2 center darkColorAlt">You currently don't have any expense category.</p>)
        } 
      }
      if (type === 'incomes') {
        if (typeof incomeCategories !== "undefined" && incomeCategories.length>0){
          return (
            incomeCategories.map(category => (<CategoryItem item={category}/>))
          )
        }
        else {
          return(<p className="mt-2 mb-2 center darkColorAlt">You currently don't have any income category.</p>)
        } 
      }
    }
    return (
      <SectionArea>
        <Title variant="dashboardTitle" color={this.state.activeType==='expenses' ? 'dark' : 'standard' } className="mb-1 action-title" action={this.switchType}>
          Expenses
        </Title>
        <Title variant="dashboardTitle" color={this.state.activeType==='incomes' ? 'dark' : 'standard' } className="mb-1 action-title" action={this.switchType}>
          Incomes
        </Title>
        {renderIncome(this.state.activeType)}
      </SectionArea>
    );
  }
}

CategoriesList.propTypes = {
  errors: PropTypes.object,
  categories: PropTypes.array
};

const mapStateToProps = state => {
  return {
    categories: state.categories,
    errors: state.errors
  };
};
export default connect(mapStateToProps)(CategoriesList);
