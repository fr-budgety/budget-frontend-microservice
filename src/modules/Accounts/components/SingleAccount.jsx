import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteAccount } from '../../../redux/actions/accountActions';
import PropTypes from 'prop-types';
import Title from '../../../components/typography/Title';
import SpecialText from '../../../components/typography/SpecialText';
import ActionButtons from '../../../components/buttons/ActionButtons';
import Confirmation from '../../../components/confirmation/Confirmation';

class SingleAccount extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deleteConfirmationIsClosed: false
		};
	}

	handleToggleConfirmation = () => {
		this.setState({
			deleteConfirmationIsClosed: !this.state.deleteConfirmationIsClosed
		});
	};
	handleEditActivation = (_id) => {
		this.props.handleEditActivation(_id);
	};
	handleDeleteAccount = () => {
		const { _id } = this.props.account;
		this.props.deleteAccount(_id);
	};
	render() {
		const { name, _id } = this.props.account;
		const { balance } = this.props;
		return (
			<React.Fragment>
				<div className="SingleAccount">
					<div className="SingleAccount--content">
						<React.Fragment>
							<Title variant="dashboardTitle" color="dark">
								{name}
							</Title>
							<div className="SingleAccount--content--right">
								<SpecialText
									variant="balanceAmount"
									className={balance.balanceAmount > 0 ? `green` : `red`}
								>
									{balance.balanceAmount}
								</SpecialText>
								<ActionButtons type="editButton" onClick={() => this.handleEditActivation(_id)} />
								<ActionButtons type="deleteButton" onClick={this.handleToggleConfirmation} />
							</div>
						</React.Fragment>
					</div>
				</div>
				<Confirmation
					visible={this.state.deleteConfirmationIsClosed}
					onConfirmationModalClose={this.handleToggleConfirmation}
					handleConfirmationCallback={this.handleDeleteAccount}
				>
					<Title variant="h2" color="alt">
						Are you sure you want to delete your account?
					</Title>
					<p className="darkColorAlt">You will delete your account and all related expenses.</p>
				</Confirmation>
			</React.Fragment>
		);
	}
}

SingleAccount.propTypes = {
	account: PropTypes.object.isRequired,
	accounts: PropTypes.object.isRequired,
	deleteAccount: PropTypes.func.isRequired,
	handleEditActivation: PropTypes.func.isRequired
};
const mapStateToProps = (state) => {
	return {
		accounts: state.accounts
	};
};

export default connect(mapStateToProps, { deleteAccount })(withRouter(SingleAccount));
