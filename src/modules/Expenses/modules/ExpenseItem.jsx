import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { setDeleteCategory } from '../../../redux/actions/categoryActions';
import Paper from "../../../components/grid/Paper";
import FlexGridContainer from "../../../components/grid/FlexGridContainer";
import { setIconPath } from '../../../util/setIconPath';
import ActionButtons from '../../../components/buttons/ActionButtons';
import Title from '../../../components/typography/Title';
import SpecialText from '../../../components/typography/SpecialText';

class ExpenseItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteConfirmationIsClosed: false,
            category: {},
            categories: []
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.categoriesList.categories !== this.props.categoriesList.categories) {
            this.expenseCategories(this.props.categoriesList.categories);
        }
    }

    //Not Pure Method
    expenseCategories = (items) => {
        let resultItem = {}
        if (items && !_.isEmpty(items)) {
            resultItem = items.filter((item) => item.name === this.props.expense.category)
            resultItem = _.head(resultItem);
            this.setState({
                ...this.state,
                category: resultItem
            })
        }
    }

    setCategories(categories) {
        this.setState({
            categories
        })
    }

    handleToggleConfirmation = (_id) => {
        this.props.handleToggleConfirmation();
        this.props.setDeleteCategory(_id);
    };
    handleEditActivation = (_id) => {
        this.props.handleEditActivation(_id);
    }
    render() {
        const { _id, description, amount, date, type, beneficiary, category } = this.props.expense;

        return (
            <React.Fragment>
                <Paper key={_id} className={`ExpenseItem--container ${type}`}>
                    <FlexGridContainer type="flex-space-between" className="ExpenseItem" size="100">
                        <div className="ExpenseItem--icon">
                            {this.state.category.icon && <img src={setIconPath(this.state.category.icon)} alt={this.state.category.name} />}
                        </div>
                        <div className="ExpenseItem--meta mt-1 mb-1 ml-1 mr-1">
                            <div className="ExpenseItem--meta--row">
                                <span className="ExpenseItem--meta--description">{description}</span>
                                {beneficiary && <span className="ExpenseItem--meta--beneficiary">to: {beneficiary}</span>}
                            </div>
                            <div className="ExpenseItem--meta--row">
                                <span className="ExpenseItem--meta--date">{moment(date).format('LL')}</span>
                                <span className="ExpenseItem--meta--category">{category}</span>
                            </div>
                        </div>
                        <div className="ExpenseItem--actions">
                            <SpecialText
                                variant="balanceAmount"
                                className={type === 'income' ? `green` : `red`}
                            >
                                {amount}
                            </SpecialText>
                            <ActionButtons type="editButton" onClick={() => this.handleEditActivation(_id)} />
                            <ActionButtons type="deleteButton" onClick={() => this.handleToggleConfirmation(_id)} />
                        </div>
                    </FlexGridContainer>
                </Paper>
            </React.Fragment>
        )
    }
}

ExpenseItem.propTypes = {
    item: PropTypes.object.isRequired,
    categories: PropTypes.object.isRequired,
    setDeleteCategory: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    };
}

export default connect(mapStateToProps, { setDeleteCategory })(ExpenseItem);