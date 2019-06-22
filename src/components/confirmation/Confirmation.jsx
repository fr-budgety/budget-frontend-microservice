import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/Modal';
import Button from '../buttons/Button';

class Confirmation extends Component {
	onConfirmationModalClose = () => {
		this.props.onConfirmationModalClose();
	};
	handleConfirmationCallback = () => {
		this.props.handleConfirmationCallback();
	};
	render() {
		return (
			<Modal
				visible={this.props.visible}
				width="600"
				height="350"
				effect="fadeInUp"
				onClickAway={this.onConfirmationModalClose}
			>
        <div className="center-middle">
          {this.props.children}
          <div className="Confirmation--buttons">
            <Button text="Delete" classes="mt-2" action={this.handleConfirmationCallback}/>
          </div>
        </div>
			</Modal>
		);
	}
}

Confirmation.propTypes = {
	onConfirmationModalClose: PropTypes.func.isRequired,
	handleConfirmationCallback: PropTypes.func,
	visible: PropTypes.bool.isRequired,
	children:  PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array
	  ])
};

export default Confirmation;
