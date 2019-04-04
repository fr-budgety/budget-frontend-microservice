import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../../components/logo/Logo';
import { connect } from 'react-redux';
import Title from '../../../components/typography/Title';
import SignUpForm from '../components/SignUpForm';
import SinglePageLayout from '../../../layouts/SinglePageLayout';
import LoadingScreen from '../../../components/loading/LoadingScreen';

class RegistrationPage extends Component {
	render() {
		const {isLoading} = this.props.auth;
		return (
			<React.Fragment>
				{isLoading && <LoadingScreen/>}
				<SinglePageLayout classes="Authentication">
					<Logo />
					<Title variant="h3">Register a new account. Fill in all the fields.</Title>
					<SignUpForm />
				</SinglePageLayout>
			</React.Fragment>
		);
	}
}
const mapStateToProps = (state) => ({
	auth: state.auth,
});
RegistrationPage.propTypes = {
	auth: PropTypes.object.isRequired
  };
export default connect(mapStateToProps)(RegistrationPage);

