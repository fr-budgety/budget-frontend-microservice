import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from '../../../components/modal/Modal';
import {
	getCategories,
	addCategory,
	clearErrors,
	toggleEditCategoryModal
} from '../../../redux/actions/categoryActions';
import { getIcons } from '../../../redux/actions/iconActions';
import FlexGridContainer from '../../../components/grid/FlexGridContainer';
import Form from '../../../components/forms/Form';
import InputField from '../../../components/forms/inputs/InputField';
import SelectField from '../../../components/forms/inputs/SelectField';
import SendButton from '../../../components/buttons/SendButton';
import IconTextArea from '../../../components/forms/inputs/IconTextArea';
import Title from '../../../components/typography/Title';
import CategoryPreview from './CategoryPreview';

class EditCategory extends Component {
  //Handle Open, Close Modal on click away
	handleEditCategoryActivation = () => {
		const { editCategoryModalIsOpen } = this.props.categories;
		const action = !editCategoryModalIsOpen;
		this.props.toggleEditCategoryModal(action);
	};
	render() {
		const { errors, icons } = this.props;
		const { editCategoryModalIsOpen } = this.props.categories;
		const selectOptions = [ 'expense', 'income' ];
		return (
			<Modal
				visible={editCategoryModalIsOpen}
				width="600"
				height="650"
				effect="fadeInUp"
				onClickAway={this.handleEditCategoryActivation}
			>
				<FlexGridContainer size={100} className="v-flex-container flex-center">
					<Title variant="h2" color="alt" className="m-l-15 m-b-30">
						Select category attributes:
					</Title>
				</FlexGridContainer>
			</Modal>
		);
	}
}

EditCategory.propTypes = {
	categories: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
	icons: PropTypes.object.isRequired,
	getCategories: PropTypes.func.isRequired,
	addCategory: PropTypes.func.isRequired,
	getIcons: PropTypes.func.isRequired,
	clearErrors: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	return {
		categories: state.categories,
		icons: state.icons,
		errors: state.errors
	};
};
export default connect(mapStateToProps, { getCategories, getIcons, addCategory, clearErrors, toggleEditCategoryModal })(
	EditCategory
);
