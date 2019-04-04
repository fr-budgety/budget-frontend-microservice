import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Modal from "../../../components/modal/Modal";
import { getAccounts, addAccount, editAccount } from "../../../redux/actions/accountActions";
import { setCurrentPage } from "../../../redux/actions/layoutActions";
import Title from "../../../components/typography/Title";
import SectionArea from "../../../components/grid/SectionArea";
import Form from '../../../components/forms/Form';
import InputField from '../../../components/forms/inputs/InputField';
import SendButton from '../../../components/buttons/SendButton';

class AccountsDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      startingBalance: "",
      actionId: "",
      errors: {
        name: "",
        startingBalance: ""
      }
    };
  }
  componentDidMount() {
    this.props.getAccounts();
  }
  componentWillReceiveProps(nextProps) {
    //Check if there is any error on submission and return it to the errors state
    if (nextProps.errors !== this.state.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
    if(nextProps.accounts.singleAccount !== this.props.accounts.singleAccount){
      console.log('Next Account: ', nextProps.accounts.singleAccount)
      const {name, startingBalance, _id} = nextProps.accounts.singleAccount;
      this.setState({
        ...this.state,
        name,
        startingBalance,
        actionId: _id
      })
    }
  }


  handleEditActivation = () => {
    this.props.handleEditActivation();
  };
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
    const accountFields = {};
    e.preventDefault();
    this.setState({
      ...this.state,
      name: "",
      startingBalance: "",
      actionId: ""
    });
    accountFields.id = this.state.actionId;
    accountFields.name = this.state.name;
    accountFields.startingBalance = this.state.startingBalance;
    this.props.editAccount(accountFields);
    this.handleEditActivation();
  };
  render() {
    const { errors } = this.props;
    return (
      <Modal
        visible={this.props.editIsActive}
        width="600"
        height="350"
        effect="fadeInUp"
        onClickAway={this.handleEditActivation}
      >
      <Form action={this.handleSubmit} classes="EditAccount--form center--vertical center--horizontal">
            <InputField
                classes="column"
                error={errors.name}
                type="input"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="Account Name"
            />
            <InputField
                classes="column"
                error={errors.startingBalance}
                type="input"
                name="startingBalance"
                value={this.state.startingBalance}
                onChange={this.handleChange}
                placeholder="Starting Balance"
            />
            <SendButton className="center"/>
           </Form>
      </Modal>
    );
  }
}

AccountsDashboard.propTypes = {
  accounts: PropTypes.object.isRequired,
  errors: PropTypes.object,
  getAccounts: PropTypes.func.isRequired,
  handleEditActivation: PropTypes.func.isRequired,
  editIsActive: PropTypes.bool.isRequired,
  editAccount: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    errors: state.errors
  };
};
export default connect( mapStateToProps,  { getAccounts, editAccount })(AccountsDashboard);
