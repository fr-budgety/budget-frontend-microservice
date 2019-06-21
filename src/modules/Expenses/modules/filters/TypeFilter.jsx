import React, { Component } from 'react';
import Button from '../../../../components/buttons/Button';
import PropTypes from "prop-types";

class TypeFilter extends Component {

    handleClick = (array, type) => {
        this.props.filterAction(array, type)
    }

    render() {
        const {expenses} = this.props;
        return (
            <div className="TypeFilter">
                <div className="TypeFilter__item">
                    <Button action={()=>this.handleClick(expenses, 'income')} text="Income" buttonType="button-extraSmall alt-color"/>
                </div>
                <div className="TypeFilter__item">
                    <Button action={()=>this.handleClick(expenses, 'expense')} text="Expenses" buttonType="button-extraSmall alt-color"/>
                </div>
            </div>
        )
    }
}

TypeFilter.propTypes = {
    expenses: PropTypes.array.isRequired,
    filterAction: PropTypes.func.isRequired
};

export default TypeFilter;