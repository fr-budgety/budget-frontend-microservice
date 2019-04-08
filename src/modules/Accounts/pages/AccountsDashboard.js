import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAccounts, getAccount, clearErrors, setDeleteAccount, deleteAccount } from "../../../redux/actions/accountActions";
import { setCurrentPage } from "../../../redux/actions/layoutActions";
import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import MainContentArea from "../../../components/grid/MainContentArea";
import AccountsList from "../components/AccountsList";
import AddAccount from "../components/AddAccount";
import EditAccount from "../components/EditAccount";
import Confirmation from "../../../components/confirmation/Confirmation";
import Title from "../../../components/typography/Title";

class AccountsDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editIsActive: false,
      deleteConfirmationIsClosed: false,
      actionId: ''
    };
  }
  componentDidMount() {
    this.props.getAccounts();
    this.props.setCurrentPage("accounts");
  }

  //Change state and display modal for delete confirmation
	handleToggleConfirmation = () => {
		this.setState({
			deleteConfirmationIsClosed: !this.state.deleteConfirmationIsClosed
		});
  };
  handleDeleteAccount = () => {
    this.props.deleteAccount(this.props.accounts.deleteAccount);
    this.handleToggleConfirmation();
  };
  //Manage Edit Modal
  onEditActivation = (_id) => {
    if(_id){
      this.props.getAccount(_id);
    }
    this.setState({
      ...this.state,
      editIsActive: !this.state.editIsActive,
    });
    this.props.clearErrors();
  };
  render() {
    return (
      <DashboardLayout title="Accounts">
          <MainContentArea>
            <AccountsList handleEditActivation={this.onEditActivation} handleToggleConfirmation={this.handleToggleConfirmation}/>
            {!this.state.editIsActive && (
            <AddAccount />
            )}
          </MainContentArea>
          <EditAccount
            handleEditActivation={this.onEditActivation}
            editIsActive={this.state.editIsActive}
            accountId={this.state.actionId}
          />
           <Confirmation
					visible={this.state.deleteConfirmationIsClosed}
					onConfirmationModalClose={this.handleToggleConfirmation}
					handleConfirmationCallback={this.handleDeleteAccount}
				>
					<Title variant="h2" color="alt">
						Are you sure you want to delete this Account?
					</Title>
					<p className="darkColorAlt">You will delete this account and all related expenses.</p>
				</Confirmation>
      </DashboardLayout>
    );
  }
}

AccountsDashboard.propTypes = {
  accounts: PropTypes.object.isRequired,
  errors: PropTypes.object,
  getAccounts: PropTypes.func.isRequired,
  getAccount: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  setDeleteAccount: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    errors: state.errors
  };
};
export default connect(
  mapStateToProps,
  { getAccounts, getAccount, setCurrentPage, clearErrors, setDeleteAccount, deleteAccount }
)(AccountsDashboard);
