import React, { Component } from 'react';
import PropTypes from "prop-types";
import Select from 'react-select';



class CategoryFilter extends Component {
    state = {
        selectedOption: null,
    };

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        this.filterAction(selectedOption);
    };

    filterAction = selectedOption => {
        if(selectedOption.value){
            this.props.filterAction(this.props.expenses, false, false, selectedOption.value);
        }
    }


    render() {
        const { items } = this.props;
        const { selectedOption } = this.state;
        
        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={items.map((item)=> {
                    return {
                        key: item.name,
                        value: item.name,
                        label: item.name
                    }
                })}
            />
        );
    }
}

CategoryFilter.propTypes = {
    expenses: PropTypes.array.isRequired,
    filterAction: PropTypes.func.isRequired
};

export default CategoryFilter;
