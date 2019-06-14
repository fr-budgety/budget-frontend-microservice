import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FlexGridContainer from "../../../components/grid/FlexGridContainer";
import { setIconPath } from '../../../util/setIconPath';
import ActionButtons from '../../../components/buttons/ActionButtons';
import { getExpenses } from '../../../redux/actions/expenseActions';
import { getAccounts } from '../../../redux/actions/accountActions';
import { getCategories } from '../../../redux/actions/categoryActions';
import SectionArea from "../../../components/grid/SectionArea";
import Paper from "../../../components/grid/Paper";
import ExpenseItem from "./ExpenseItem";
import TypeFilter from "./filters/TypeFilter";
import FilterTest from "./filters/FilterTest";



class ExpenseDashboard extends Component {
    constructor (props){
        super(props);
        this.state = {
            expenses: [],
            filteredExpenses: [],
            accounts: []
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
    }

    componentDidMount() {
        this.props.getExpenses();
        this.props.getAccounts();
    }

    //Filter Dispatch
    arrayFilter = (initialArray, type) => {
        this.props.getCategories();
        let items = initialArray;
        //Filter by type
        if (type){
            this.filterByType(items, type)
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

    //Filter SetState Reducer
    setFilteredArray = (filteredArray) => {
        this.setState({
            filteredExpenses: filteredArray
        })
    }

    render() {
        const { filteredExpenses, accounts, expenses } = this.state;
        return (
            <SectionArea>
                    <div className="ExpenseItem__filters">
                        <TypeFilter expenses={expenses} filterAction={this.arrayFilter}/>
                        <FilterTest items={accounts} filterAction={this.arrayFilter}/>
                        <select value="{value}" onChange="{onChange}" name="{name}">
                            <option value="">Account Filter</option>
                            {accounts.map(option=>(
                                <option value={option.name}>{option.name}</option>
                            ))}
                        </select>
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
