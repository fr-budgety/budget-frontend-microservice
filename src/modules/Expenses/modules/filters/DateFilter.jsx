import React, { Component } from 'react';
import PropTypes from "prop-types";
import moment from 'moment';
import DatePicker from 'react-datepicker2';
import Button from '../../../../components/buttons/Button';


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
        const { isFromSet, isToSet } = this.state;

        let datesObject = {
            fromDate: false,
            toDate: false,
        };

        this.setState({ errors: null }, () => {
            if (isFromSet && isToSet) {
                datesObject.fromDate = fromDate;
                datesObject.toDate = toDate;
                this.props.filterAction(this.props.expenses, false, false, false, datesObject.fromDate, datesObject.toDate);
            } else {
                this.setState({
                    errors: 'Please fill "From" and "To" date filters',
                })
            }
        });
    }

    render() {
        return (
            <div className="DateField__container mt-2">
                <div className="DateField__item">
                    <div className="Field DateField">
                        <small className="helper-text IconTextArea--helper">From: </small>
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
                </div>
                <div className="DateField__item">
                    <div className="Field DateField">
                    <small className="helper-text IconTextArea--helper">To: </small>
                        <DatePicker
                            value={this.state.dateTo}
                            timePicker={false}
                            onChange={dateTo => this.setState({ dateTo, isToSet: true })}
                            className="column two-columns"
                            placeholderText="Select a date"
                        />
                    </div>
                </div>
                <div className="DateField__item">
                    {this.state.errors && <p>{this.state.errors}</p>}
                    <div className="DateField__buttons">
                        <Button action={() => this.filterAction(this.state.dateFrom, this.state.dateTo)} text="Filter" buttonType="button-extraSmall alt-color mr-1"/>
                        <Button action={this.resetState} text="Clear Dates" buttonType="button-extraSmall alt-color"/>
                    </div>
                </div>
            </div>
        )
    }

}

DateFilter.propTypes = {
    expenses: PropTypes.array.isRequired,
    filterAction: PropTypes.func.isRequired,
}

export default DateFilter;