import React, { Component } from "react";
import PropTypes, { string } from "prop-types";
import { connect } from "react-redux";
import { getExpenses } from '../../../redux/actions/expenseActions';
import { getAccounts } from '../../../redux/actions/accountActions';
import { getCategories } from '../../../redux/actions/categoryActions';
import SectionArea from "../../../components/grid/SectionArea";
import ExpenseItem from "./ExpenseItem";
import TypeFilter from "./filters/TypeFilter";
import AccountFilter from "./filters/AccountFilter";
import CategoryFilter from "./filters/CategoryFilter";



class ExpenseDashboard extends Component {
    constructor (props){
        super(props);
        this.state = {
            expenses: [],
            filteredExpenses: [],
            accounts: [],
            categories: [],
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.expenses.expenses !== this.props.expenses.expenses) {
            this.setState({
                ...this.state,
                expenses: this.props.expenses.expenses,
                filteredExpenses: this.props.expenses.expenses
            })
        }
        if (prevProps.accounts.accounts !== this.props.accounts.accounts) {
            this.setState({
                ...this.state,
                accounts: this.props.accounts.accounts
            })
        }
        if (prevProps.categories.categories !== this.props.categories.categories) {
            this.setState({
                ...this.state,
                categories: this.props.categories.categories
            })
        }
    }

    componentDidMount() {
        this.props.getExpenses();
        this.props.getAccounts();
        this.props.getCategories();
    }

    //Filter Dispatch
    arrayFilter = (initialArray, type, accountName, categoryName) => {
        this.props.getCategories();
        let items = initialArray;
        //Filter by type
        if (type){
            this.filterByType(items, type)
        }
        if (accountName) {
            this.filterByAccount(items, accountName)
        }
        if (categoryName) {
            this.filterByCategory(items, categoryName)
        }
    }

    //Filter By Type Action
    filterByType = (initialArray, type) => {
        let filteredArray = [];
        if (type){
            filteredArray = initialArray;
            filteredArray = initialArray.filter(item => item.type===type)
            this.setFilteredArray(filteredArray)
        }
    }

    //Filter By Account Action
    filterByAccount = (initialArray, accountName) => {
        let filteredArray = [];
        if(accountName){
            filteredArray = this.state.expenses;
            filteredArray = initialArray.filter(item => item.account===accountName);
            this.setFilteredArray(filteredArray);
        }
    }

    //Filter By Category Action
    filterByCategory = (initialArray, categoryName) => {
        let filteredArray = [];
        if(categoryName){
            filteredArray = this.state.expenses;
            filteredArray = initialArray.filter(item => item.category===categoryName);
            this.setFilteredArray(filteredArray);
        }
    }

    //Filter SetState Reducer
    setFilteredArray = (filteredArray) => {
        this.setState({
            filteredExpenses: filteredArray
        })
    }

    render() {
        const { filteredExpenses, accounts, expenses, categories } = this.state;
        console.log(categories)
        return (
            <SectionArea>
                    <div className="ExpenseItem__filters">
                        <TypeFilter expenses={expenses} filterAction={this.arrayFilter}/>
                        <AccountFilter expenses={expenses} items={accounts} filterAction={this.arrayFilter}/>
                        <CategoryFilter expenses={expenses} items={categories} filterAction={this.arrayFilter}/>
                    </div>
                    {filteredExpenses.map(expense => <ExpenseItem expense={expense} key={expense._id} categoriesList={this.props.categories}/>)}
            </SectionArea>
        );
    }
}

ExpenseDashboard.propTypes = {
    errors: PropTypes.object,
    clearErrors: PropTypes.func.isRequired,
    getCategories: PropTypes.func.isRequired,
    getAccounts: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        errors: state.errors,
        accounts: state.accounts,
        categories: state.categories,
    };
};

export default connect(mapStateToProps, { getExpenses, getCategories, getAccounts })(ExpenseDashboard);
