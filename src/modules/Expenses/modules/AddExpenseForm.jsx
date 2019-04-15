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
            name: '',
            startingBalance: '',
            errors: {
                name: '',
                startingBalance: ''
            }
        }
    }

    render() {
        const { errors } = this.props;
        const selectOptions = [
            'expense',
            'income'
        ]
        console.log(this.props.icons.icons)
        return (
            <FlexGridContainer type="flex-space-between" className="AddExpenseForm" size="100">
                <Form action={this.handleSubmit} classes="AddExpenseForm--form">
                    <FormRow>
                        <InputField
                            classes="column two-columns"
                            error={errors.startingBalance}
                            type="input"
                            name="startingBalance"
                            value={this.state.startingBalance}
                            onChange={this.handleChange}
                            placeholder="Name *"
                        />
                        <InputField
                            classes="column two-columns"
                            error={errors.startingBalance}
                            type="input"
                            name="startingBalance"
                            value={this.state.startingBalance}
                            onChange={this.handleChange}
                            placeholder="Amount *"
                        />
                    </FormRow>
                    <FormRow>
                        <SelectField options={selectOptions} onChange={this.handleChange} name="type" classes="m-t-20"></SelectField>
                    </FormRow>
                    <FormRow>
                       <SelectFieldExpense options={this.props.accounts.accounts} onChange={this.handleChange} name="accounts" classes="m-t-20"></SelectFieldExpense>
                    </FormRow>
                    <FormRow>
                        <IconTextArea type='expense' icons={this.props.icons.icons} handleSelectedIcon={this.handleSelectedIcon}/>
                    </FormRow>
                    <FormRow>
                        <InputField
                            classes="column two-columns"
                            error={errors.startingBalance}
                            type="input"
                            name="startingBalance"
                            value={this.state.startingBalance}
                            onChange={this.handleChange}
                            placeholder="Beneficiary"
                        />
                    </FormRow>
                    <FormRow>
                        <InputField
                            classes="column two-columns"
                            error={errors.startingBalance}
                            type="input"
                            name="startingBalance"
                            value={this.state.startingBalance}
                            onChange={this.handleChange}
                            placeholder="Description"
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
