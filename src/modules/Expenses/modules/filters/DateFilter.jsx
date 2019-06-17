import React, { Component } from 'react';
import PropTypes from "prop-types";
import Select from 'react-select';
import moment from 'moment';
import DatePicker from 'react-datepicker2';


class DateFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateFrom: moment(),
            dateTo: moment(),
            isFromSet: false,
            isToSet: false
        }
    }

    filterAction = selectedOption => {
        if(selectedOption.value){
            this.props.filterAction(this.props.expenses, false, false, selectedOption.value);
        }
    }

    render() {
        return (
            <React.Fragment>
            <div className="Field DateField">
                <p>From</p>
                <DatePicker
                    value={this.state.dateFrom}
                    timePicker={false}
                    onChange={dateFrom => {
                            this.setState({ dateFrom })
                        }
                    }
                    placeholderText="Select a date"
                    className="column two-columns"
                />
            </div>
            <div className="Field DateField">
                <p>From</p>
                <DatePicker
                    value={this.state.dateTo}
                    timePicker={false}
                    onChange={dateTo => this.setState({ dateTo })}
                    className="column two-columns"
                    placeholderText="Select a date"
                />
            </div>
            </React.Fragment>
        )
    }

}

export default DateFilter;