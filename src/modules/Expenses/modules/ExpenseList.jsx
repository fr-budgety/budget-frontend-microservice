import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FlexGridContainer from "../../../components/grid/FlexGridContainer";
import { setIconPath } from '../../../util/setIconPath';
import ActionButtons from '../../../components/buttons/ActionButtons';
import { getExpenses } from '../../../redux/actions/expenseActions';
import Paper from "../../../components/grid/Paper";
import ExpenseItem from "./ExpenseItem";



class ExpenseDashboard extends Component {
    componentDidMount() {
        this.props.getExpenses();
    }

    render() {
        const { expenses } = this.props.expenses;
        return (
            <div>
                {expenses.map(expense => <ExpenseItem expense={expense} key={expense._id}/>)}
            </div>
        );
    }
}

ExpenseDashboard.propTypes = {
    errors: PropTypes.object,
    clearErrors: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
    return {
        errors: state.errors,
    };
};

export default connect(mapStateToProps, { getExpenses })(ExpenseDashboard);
