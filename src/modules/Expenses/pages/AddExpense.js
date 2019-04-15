import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clearErrors } from "../../../redux/actions/accountActions";
import { setCurrentPage } from "../../../redux/actions/layoutActions";
import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import MainContentArea from "../../../components/grid/MainContentArea";
import Form from '../../../components/forms/Form';
import InputField from '../../../components/forms/inputs/InputField';
import SendButton from '../../../components/buttons/SendButton';
import Paper from '../../../components/grid/Paper';
import Title from '../../../components/typography/Title';
import SectionArea from '../../../components/grid/SectionArea';
import FlexGridContainer from '../../../components/grid/FlexGridContainer';


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
  }

  render() {
    const { errors } = this.props;
    return (
      <DashboardLayout title="Add new expense">
        <MainContentArea>
          <SectionArea>
            <Title variant="dashboardTitle" color="dark" className="mb-1">
              Expense:
				      </Title>
            <Paper>
              <FlexGridContainer type="flex-space-between" className="CategoryItem" size="100">
                <Form action={this.handleSubmit} classes="AddExpense--form">
                <div className="FormRow">
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
                  </div>
                  <div className="FormRow">
                  <InputField
                    classes="column two-columns"
                    error={errors.startingBalance}
                    type="input"
                    name="startingBalance"
                    value={this.state.startingBalance}
                    onChange={this.handleChange}
                    placeholder="Beneficiary"
                  />
                  </div>
                  <div className="FormRow">
                  <InputField
                    classes="column two-columns"
                    error={errors.startingBalance}
                    type="input"
                    name="startingBalance"
                    value={this.state.startingBalance}
                    onChange={this.handleChange}
                    placeholder="Description"
                  />
                  </div>
                  <SendButton />
                </Form>
              </FlexGridContainer>
            </Paper>
          </SectionArea>
        </MainContentArea>
      </DashboardLayout>
    );
  }
}

AddExpense.propTypes = {
  errors: PropTypes.object,
  setCurrentPage: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    categories: state.categories,
    errors: state.errors
  };
};
export default connect(mapStateToProps, { setCurrentPage, clearErrors })(AddExpense);
