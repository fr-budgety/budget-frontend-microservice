import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clearErrors } from "../../../redux/actions/accountActions";
import { setCurrentPage } from "../../../redux/actions/layoutActions";
import { getAccounts } from '../../../redux/actions/accountActions';
import SelectField from '../../../components/forms/inputs/SelectField';
import Form from '../../../components/forms/Form';
import InputField from '../../../components/forms/inputs/InputField';
import SendButton from '../../../components/buttons/SendButton';
import FlexGridContainer from '../../../components/grid/FlexGridContainer';
import FormRow from "../../../components/grid/FormRow";
import SelectFieldExpense from "./SelectFieldExpense";
import IconTextArea from "../../../components/forms/inputs/IconTextArea";


class AddExpenseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'expense',
            amount: '',
            description: '',
            accounts: '',
            beneficiary: '',
            icon: '',
            errors: {
                name: '',
                startingBalance: ''
            }
        }
    }

    //Handle Form Change
    handleChange = e => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
          ...this.state,
          [name]: value
        });
      };

      handleSubmit = e => {
        this.props.clearErrors();
        const expenseFields = {
            name: this.state.name,
            type: this.state.type,
        }
        //Check if icon is set or use an empty string
        expenseFields.icon = this.state.icon.icon ? this.state.icon.icon : 'default';
        //Send category action

        e.preventDefault();
    };

    render() {
        const { errors } = this.props;
        const selectOptions = [
            'expense',
            'income'
        ]
        return (
            <FlexGridContainer type="flex-space-between" className="AddExpenseForm" size="100">
                <Form action={this.handleSubmit} classes="AddExpenseForm--form">
                    <FormRow>
                        <SelectField options={selectOptions} onChange={this.handleChange} name="type" classes="column two-columns"></SelectField>
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
                       <SelectFieldExpense options={this.props.accounts.accounts} onChange={this.handleChange} name="accounts" classes="m-t-20"></SelectFieldExpense>
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
                        <IconTextArea type='expense' icons={this.props.icons.icons} handleSelectedIcon={this.handleSelectedIcon}/>
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
    getAccounts: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        accounts: state.accounts,
        categories: state.categories,
        icons: state.icons,
        errors: state.errors
    };
};
export default connect(mapStateToProps, { setCurrentPage, clearErrors, getAccounts })(AddExpenseForm);
