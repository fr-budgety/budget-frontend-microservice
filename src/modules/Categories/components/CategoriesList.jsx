import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterCats } from '../../../redux/actions/categoryActions';
import Paper from '../../../components/grid/Paper';
import Title from '../../../components/typography/Title';
import SectionArea from '../../../components/grid/SectionArea';

class CategoriesList extends Component {
	handleEditActivation = (_id) => {
		this.props.handleEditActivation(_id);
	};
    filterCategoryByType = (initialArr, type)=>{
       const newArr = initialArr.filter (item =>item.type === type);
       return newArr;
    }
	render() {
        const { categories } = this.props.categories;
        const expenseCategories = this.filterCategoryByType(categories, 'expense');
        const incomeCategories = this.filterCategoryByType(categories, 'income');

		return (
			<SectionArea>
				<Title variant="dashboardTitle" color="dark" className="mb-1">
					Expenses
				</Title>
                <SectionArea className="expenses SectionArea--grid">
                {(typeof expenseCategories !== 'undefined' && expenseCategories.length > 0) ? expenseCategories.map((category) => (
                        <Paper className="Paper--third">	<p>{category.name}</p></Paper>
                    )) : 
                    <Paper>	
                        <p className="mt-2 mb-2 center darkColorAlt">You currently don't have any expense category.</p>
                    </Paper>
                }
                </SectionArea>
				<Title variant="dashboardTitle" color="dark" className="mb-1">
					Incomes
				</Title>
                {(typeof incomeCategories !== 'undefined' && incomeCategories.length > 0) ? incomeCategories.map((category) => (
                        <Paper>	<p>{category.name}</p></Paper>
                    )) : 
                    <Paper>	
                        <p className="mt-2 mb-2 center darkColorAlt">You currently don't have any expense category.</p>
                    </Paper>
                }
			</SectionArea>
		);
	}
}

CategoriesList.propTypes = {
	errors: PropTypes.object,
    categories: PropTypes.array
};

const mapStateToProps = (state) => {
	return {
		categories: state.categories,
		errors: state.errors
	};
};
export default connect(mapStateToProps)(CategoriesList);
