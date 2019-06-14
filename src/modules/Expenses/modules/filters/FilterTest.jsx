import React, { Component } from 'react';
import PropTypes from "prop-types";
import Select from 'react-select';



class FilterTest extends Component {
    state = {
        selectedOption: null,
    };

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };


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

FilterTest.propTypes = {
    expenses: PropTypes.array.isRequired,
    filterAction: PropTypes.func.isRequired
};

export default FilterTest;
