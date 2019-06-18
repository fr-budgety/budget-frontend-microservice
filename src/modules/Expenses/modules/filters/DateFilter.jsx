import React, { Component } from 'react';
import PropTypes from "prop-types";
import moment from 'moment';
import DatePicker from 'react-datepicker2';


class DateFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateFrom: moment(),
            dateTo: moment(),
            isFromSet: false,
            isToSet: false,
            errors: null,
        }
    }

    //Clear all filters
    resetState = () => {
        this.setState({
            dateFrom: moment(),
            dateTo: moment(),
            isFromSet: false,
            isToSet: false,
            errors: null,
        })
        this.props.filterAction(this.props.expenses, false, false, false, false, false);
    }

    //Filter action
    filterAction = (fromDate, toDate) => {
        const {isFromSet, isToSet} = this.state;

        let datesObject = {
            fromDate: false,
            toDate: false,
        };

        this.setState({errors: null}, () => {
            if (isFromSet && isToSet){
                datesObject.fromDate = fromDate;
                datesObject.toDate = toDate;
                this.props.filterAction(this.props.expenses, false, false, false, datesObject.fromDate, datesObject.toDate);
            }else{
                this.setState({
                    errors: 'Please fill "From" and "To" date filters',
                })
            }
        });
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
                            this.setState({ dateFrom, isFromSet: true })
                        }
                    }
                    placeholderText="Select a date"
                    className="column two-columns"
                />
            </div>
            <div className="Field DateField">
                <p>To</p>
                <DatePicker
                    value={this.state.dateTo}
                    timePicker={false}
                    onChange={dateTo => this.setState({ dateTo, isToSet: true })}
                    className="column two-columns"
                    placeholderText="Select a date"
                />
            </div>
            {this.state.errors && <p>{this.state.errors}</p>}
            <button onClick={()=>this.filterAction(this.state.dateFrom, this.state.dateTo)}>Filter</button>
            <button onClick={this.resetState}>Clear Filters</button>
            </React.Fragment>
        )
    }

}

DateFilter.propTypes = {
    expenses: PropTypes.array.isRequired,
    filterAction: PropTypes.func.isRequired,
}

export default DateFilter;