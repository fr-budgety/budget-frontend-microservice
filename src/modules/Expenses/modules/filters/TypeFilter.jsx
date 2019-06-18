import React, { Component } from 'react'
import PropTypes from "prop-types";

class TypeFilter extends Component {

    handleClick = (array, type) => {
        this.props.filterAction(array, type)
    }

    render() {
        const {expenses} = this.props;
        return (
            <div className="TypeFilter">
                <button onClick={()=>this.handleClick(expenses, 'income')}>Income</button>
                <button onClick={()=>this.handleClick(expenses, 'expense')}>expenses</button>
            </div>
        )
    }
}

TypeFilter.propTypes = {
    expenses: PropTypes.array.isRequired,
    filterAction: PropTypes.func.isRequired
};

export default TypeFilter;