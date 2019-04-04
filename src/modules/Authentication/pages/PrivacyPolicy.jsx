import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../../components/logo/Logo';
import { connect } from 'react-redux';
import Title from '../../../components/typography/Title';
import SinglePageLayout from '../../../layouts/SinglePageLayout';
import LoadingScreen from '../../../components/loading/LoadingScreen';
import LogInForm from '../components/LogInForm';

class PrivacyPage extends Component {
	render() {
		const {isLoading} = this.props.auth;
		return (
			<React.Fragment>
				{isLoading && <LoadingScreen/>}
				<SinglePageLayout classes="Authentication">
					<Logo />
					<Title variant="h3">Privacy Policy</Title>
					
				</SinglePageLayout>
			</React.Fragment>
		);
	}
}
const mapStateToProps = (state) => ({
	auth: state.auth,
});
PrivacyPage.propTypes = {
	auth: PropTypes.object.isRequired
  };
export default connect(mapStateToProps)(PrivacyPage);

