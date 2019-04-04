import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LogoutButton from '../../../../components/buttons/LogoutButton';
import Title from '../../../../components/typography/Title';

class GlobalActions extends Component {
	render() {
    const {email} = this.props.auth.userEmail;
		return (
			<div className="GlobalActions">
				<Title variant="globalActions" color="dark">
					{email}
				</Title>
				<LogoutButton/>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
  return{
  auth: state.auth
  }
}

export default connect(mapStateToProps)(GlobalActions);
