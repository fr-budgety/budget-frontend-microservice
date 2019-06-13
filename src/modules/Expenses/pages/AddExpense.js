import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clearErrors } from "../../../redux/actions/accountActions";
import { setCurrentPage } from "../../../redux/actions/layoutActions";
import { getAccounts } from '../../../redux/actions/accountActions';
import { getIcons } from '../../../redux/actions/iconActions';
import SelectField from '../../../components/forms/inputs/SelectField';
import IconTextArea from "../../../components/forms/inputs/IconTextArea";

import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import MainContentArea from "../../../components/grid/MainContentArea";
import Form from '../../../components/forms/Form';
import InputField from '../../../components/forms/inputs/InputField';
import SendButton from '../../../components/buttons/SendButton';
import Paper from '../../../components/grid/Paper';
import Title from '../../../components/typography/Title';
import SectionArea from '../../../components/grid/SectionArea';
import FlexGridContainer from '../../../components/grid/FlexGridContainer';
import AddExpenseForm from "../modules/AddExpenseForm";


class AddExpense extends Component {
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

  componentDidMount() {
    this.props.setCurrentPage('expenses');
    this.props.getAccounts();
    this.props.getIcons();
  }

  render() {
    const { errors } = this.props;
    const selectOptions = [
      'expense',
      'income'
    ]
    const { accounts } = this.props.accounts;
    return (
      <DashboardLayout title="Add new expense">
        <MainContentArea>
          <SectionArea>
            <Title variant="dashboardTitle" color="dark" className="mb-1">
              Fill in the required fields
				      </Title>
            <Paper>
              <AddExpenseForm icons={this.props.icons}/>
            </Paper>
          </SectionArea>
        </MainContentArea>
      </DashboardLayout>
    );
  }
}

AddExpense.propTypes = {
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
    errors: state.errors
  };
};
export default connect(mapStateToProps, { setCurrentPage, clearErrors, getAccounts, getIcons })(AddExpense);
