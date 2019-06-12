import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { clearErrors } from '../../../redux/actions/accountActions';
import { setCurrentPage } from '../../../redux/actions/layoutActions';
import { getAccounts } from '../../../redux/actions/accountActions';
import { addExpense } from '../../../redux/actions/expenseActions';
import { getCategories } from '../../../redux/actions/categoryActions';
import SelectField from '../../../components/forms/inputs/SelectField';
import Form from '../../../components/forms/Form';
import InputField from '../../../components/forms/inputs/InputField';
import SendButton from '../../../components/buttons/SendButton';
import FlexGridContainer from '../../../components/grid/FlexGridContainer';
import FormRow from '../../../components/grid/FormRow';
import SelectFieldExpense from './SelectFieldExpense';
import DatePicker from 'react-datepicker2';
import moment from 'moment';

class AddExpenseForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: 'expense',
			amount: '',
			description: '',
			accounts: '',
			beneficiary: '',
			category: '',
			date: moment(),
			errors: {
				name: '',
				startingBalance: ''
			}
		};
	}

	componentDidMount() {
		this.props.getCategories();
	}

	//Handle Form Change
	handleChange = (e) => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			...this.state,
			[name]: value
		});
	};
	handleSelectedIcon = (icon) => {
		this.setState({
			...this.state,
			icon
		});
	};

	handleSubmit = (e) => {
		this.props.clearErrors();
		const selectedCategoryId = this.getCategoryIdByName(this.state.category);
		const expenseFields = {
			account: this.state.accounts,
			category: selectedCategoryId,
			description: this.state.description,
			type: this.state.type,
			amount: this.state.amount,
			beneficiary: this.state.beneficiary,
			date: moment(this.state.date).toISOString()
		};
		this.props.addExpense(expenseFields);
		e.preventDefault();
	};

	//Get Category Id By Name
	getCategoryIdByName = (categoryToFilter) => {
		const item = this.props.categories.categories.filter(category=>category.name === categoryToFilter);
		let itemName;
		if(!_.isEmpty(item)){
			itemName = _.first(item);
		} else {
			itemName = {name: 'default'};
		}
		return itemName.name;
	}

	//Filter category from redux state by type
	filterCategoryByType = (initialArr, type) => {
		const newArr = initialArr.filter(item => item.type === type);
		return newArr;
	};

	render() {
		const { errors } = this.props;
		const { categories } = this.props.categories;
		const expenseCategories = this.filterCategoryByType(categories, "expense");
		const incomeCategories = this.filterCategoryByType(categories, "income");
		const selectOptions = ['expense', 'income'];
		return (
			<FlexGridContainer type="flex-space-between" className="AddExpenseForm" size="100">
				<Form action={this.handleSubmit} classes="AddExpenseForm--form">
					<FormRow>
						<SelectField
							options={selectOptions}
							onChange={this.handleChange}
							name="type"
							classes="column two-columns"
						/>
						<InputField
							classes="column two-columns"
							error={errors.amount}
							type="input"
							name="amount"
							value={this.state.amount}
							onChange={this.handleChange}
							placeholder="Amount *"
						/>
					</FormRow>
					<FormRow>
						<InputField
							classes="column two-columns"
							error={errors.description}
							type="input"
							name="description"
							value={this.state.description}
							onChange={this.handleChange}
							placeholder="Description"
						/>
					</FormRow>
					<FormRow>
						<DatePicker
							value={this.state.date}
							timePicker={false}
							onChange={date => this.setState({ date })}
							className="column two-columns"
						/>
					</FormRow>
					<FormRow>
						<SelectFieldExpense
							defaultOption="Select Account"
							options={this.props.accounts.accounts}
							onChange={this.handleChange}
							name="accounts"
							classes="m-t-20"
						/>
					</FormRow>
					<FormRow>
						<InputField
							classes="column two-columns"
							error={errors.beneficiary}
							type="input"
							name="beneficiary"
							value={this.state.beneficiary}
							onChange={this.handleChange}
							placeholder="Beneficiary"
						/>
					</FormRow>
					<FormRow>
						<SelectField
							defaultOption="Select Category"
							options={this.state.type === 'expense' ? (expenseCategories.map(expenseCategory => expenseCategory.name)) : (incomeCategories.map(incomeCategory => incomeCategory.name))}
							onChange={this.handleChange}
							name="category"
							classes="column two-columns"
						/>
					</FormRow>
					<SendButton />
				</Form>
			</FlexGridContainer>
		);
	}
}

AddExpenseForm.propTypes = {
	errors: PropTypes.object,
	accounts: PropTypes.object,
	setCurrentPage: PropTypes.func.isRequired,
	clearErrors: PropTypes.func.isRequired,
	getAccounts: PropTypes.func.isRequired,
	getCategories: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	return {
		accounts: state.accounts,
		categories: state.categories,
		icons: state.icons,
		errors: state.errors,
	};
};
export default connect(mapStateToProps, { setCurrentPage, clearErrors, getAccounts, addExpense, getCategories })(AddExpenseForm);
