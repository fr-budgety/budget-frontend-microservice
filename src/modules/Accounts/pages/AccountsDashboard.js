import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAccounts, getAccount, clearErrors } from "../../../redux/actions/accountActions";
import { setCurrentPage } from "../../../redux/actions/layoutActions";
import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import MainContentArea from "../../../components/grid/MainContentArea";
import AccountsList from "../components/AccountsList";
import AddAccount from "../components/AddAccount";
import EditAccount from "../components/EditAccount";

class AccountsDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editIsActive: false,
      actionId: '123'
    };
  }
  componentDidMount() {
    this.props.getAccounts();
    this.props.setCurrentPage("accounts");
  }

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
            <AccountsList handleEditActivation={this.onEditActivation} />
            {!this.state.editIsActive && (
            <AddAccount />
            )}
          </MainContentArea>
          <EditAccount
            handleEditActivation={this.onEditActivation}
            editIsActive={this.state.editIsActive}
            accountId={this.state.actionId}
          />
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
  clearErrors: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    errors: state.errors
  };
};
export default connect(
  mapStateToProps,
  { getAccounts, getAccount, setCurrentPage, clearErrors }
)(AccountsDashboard);
