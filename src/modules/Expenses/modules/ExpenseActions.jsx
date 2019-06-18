import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import SectionArea from "../../../components/grid/SectionArea";
import Button from '../../../components/buttons/Button';
import FlexGridContainer from '../../../components/grid/FlexGridContainer';

class ExpenseActions extends Component {

  buttonAction = () => {
    console.log('action')
  }

  render() {
    return (
      <SectionArea>
        <FlexGridContainer>
        <Link to='/expenses/add'>
            <Button
            text="Add new expense"
            buttonType="button-small"
            classes="add-new-category"
            action={this.buttonAction}
            />
        </Link>
        </FlexGridContainer>
      </SectionArea>
    );
  }
}

ExpenseActions.propTypes = {
  errors: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    errors: state.errors
  };
};
export default connect(mapStateToProps)(ExpenseActions);
