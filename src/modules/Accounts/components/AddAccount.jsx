import React, { Component } from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getAccounts, addAccount} from '../../../redux/actions/accountActions';
import Paper from "../../../components/grid/Paper";
import Title from "../../../components/typography/Title";
import SectionArea from "../../../components/grid/SectionArea";
import Form from '../../../components/forms/Form';
import InputField from '../../../components/forms/inputs/InputField';
import SendButton from '../../../components/buttons/SendButton';

class AddAccount extends Component {
    constructor(props){
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
    componentWillReceiveProps(nextProps) {
        //Check if there is any error on submission and return it to the errors state
        if (nextProps.errors !== this.state.errors) {
          this.setState({
            errors: nextProps.errors
          });
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
        const accountFields = {}
        e.preventDefault();
        this.setState({
          ...this.state,
          name: '',
          startingBalance: ''
        })
        accountFields.name = this.state.name;
        accountFields.startingBalance = this.state.startingBalance;
        this.props.addAccount(accountFields);
      };
    
  render() {
    const {errors} = this.props;
    const {accounts} = this.props.accounts;
    
    return (
      <SectionArea className="mt-2">
        <Title variant="dashboardTitle" color="dark" className="mb-1">
          Add Account
        </Title>
        <Paper>
           <Form action={this.handleSubmit} classes="AddAccount--form">
            <InputField
                classes="column one-column"
                error={errors.name}
                type="input"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="Account Name"
            />
            <InputField
                classes="column two-columns"
                error={errors.startingBalance}
                type="input"
                name="startingBalance"
                value={this.state.startingBalance}
                onChange={this.handleChange}
                placeholder="Starting Balance"
            />
            <SendButton/>
           </Form>
        </Paper>
      </SectionArea>
    );
  }
}


AddAccount.propTypes = {
    accounts: PropTypes.object.isRequired,
    errors: PropTypes.object,
    getAccounts: PropTypes.func.isRequired,
    addAccount: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        accounts: state.accounts,
        errors: state.errors
    }
}
export default connect(mapStateToProps, {getAccounts, addAccount})(AddAccount);
