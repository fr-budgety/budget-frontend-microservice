import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterCats } from '../../../redux/actions/categoryActions';
import Paper from '../../../components/grid/Paper';
import Title from '../../../components/typography/Title';
import SectionArea from '../../../components/grid/SectionArea';
import FlexGridContainer from '../../../components/grid/FlexGridContainer';
import FlexGridCell from '../../../components/grid/FlexGridCell';

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
                <FlexGridContainer type="flex-space-between">
                {(typeof expenseCategories !== 'undefined' && expenseCategories.length > 0) ? expenseCategories.map((category) => (
                        <FlexGridCell size="1of4 category-item">
                            <Paper className="auto"><p>{category.name}</p></Paper>
                        </FlexGridCell>
                    )) : 
                    <Paper>	
                        <p className="mt-2 mb-2 center darkColorAlt">You currently don't have any expense category.</p>
                    </Paper>
                }
                </FlexGridContainer>
				<Title variant="dashboardTitle" color="dark" className="mb-1">
					Incomes
				</Title>
                <FlexGridContainer type="flex-space-between">
                {(typeof incomeCategories !== 'undefined' && incomeCategories.length > 0) ? incomeCategories.map((category) => (
                        <FlexGridCell size="1of4 category-item">
                        <Paper className="auto"><p>{category.name}</p></Paper>
                    </FlexGridCell>
                    )) : 
                    <Paper>	
                        <p className="mt-2 mb-2 center darkColorAlt">You currently don't have any expense category.</p>
                    </Paper>
                }
                </FlexGridContainer>
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
