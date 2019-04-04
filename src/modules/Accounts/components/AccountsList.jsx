import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAccounts } from '../../../redux/actions/accountActions';
import { balanceCalculation } from '../../../util/expenseHelpers';
import Paper from '../../../components/grid/Paper';
import Title from '../../../components/typography/Title';
import SectionArea from '../../../components/grid/SectionArea';
import SingleAccount from './SingleAccount';

class AccountsList extends Component {
	handleEditActivation = (_id) => {
		this.props.handleEditActivation(_id);
	};

	render() {
		const { accounts } = this.props.accounts;
		return (
			<SectionArea>
				<Title variant="dashboardTitle" color="dark" className="mb-1">
					Account List's
				</Title>
				<Paper>
						{(typeof accounts !== 'undefined' && accounts.length > 0) ? accounts.map((account) => (
							<SingleAccount
								key={account._id}
								account={account}
								balance={balanceCalculation(account.expenses, account.startingBalance)}
								handleEditActivation={this.handleEditActivation}
							/>
						)) : <p className="mt-2 mb-2 center darkColorAlt">You currently don't have any active account.</p>}
				</Paper>
			</SectionArea>
		);
	}
}

AccountsList.propTypes = {
	accounts: PropTypes.object.isRequired,
	errors: PropTypes.object,
	getAccounts: PropTypes.func.isRequired,
	setCurrentPage: PropTypes.func
};

const mapStateToProps = (state) => {
	return {
		accounts: state.accounts,
		errors: state.errors
	};
};
export default connect(mapStateToProps, { getAccounts })(AccountsList);
