import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setDeleteAccount } from '../../../redux/actions/accountActions';
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

	handleEditActivation = (_id) => {
		this.props.handleEditActivation(_id);
	};
	handleToggleConfirmation = (_id) => {
    this.props.handleToggleConfirmation();
    this.props.setDeleteAccount(_id);
  };
	render() {
		const { name, _id } = this.props.account;
		const { balance } = this.props;
		return (
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
								<ActionButtons type="deleteButton" onClick={()=>this.handleToggleConfirmation(_id)} />
							</div>
						</React.Fragment>
					</div>
				</div>
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

export default connect(mapStateToProps, { setDeleteAccount })(withRouter(SingleAccount));
