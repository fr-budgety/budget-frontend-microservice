import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from '../../../components/modal/Modal';
import _ from 'lodash';
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
	constructor(props) {
        super(props);
        this.state = {
            name: "",
            type: "expense",
            icon: {},
            errors: {
                name: "",
                type: "",
                icon: ""
            }
        };
    }
    componentDidMount() {
        //Get all icons into state
		this.props.getIcons();
	}
	componentDidUpdate(prevProps) {
		// When modal open, compare previeus props to current props and update state right before rerender
		if (this.props.categories.editCategory !== prevProps.categories.editCategory) {
			//@ToDo the array should be a simple object from the reducer
			if(!_.isEmpty(this.props.categories.editCategory)){
				const {name, type, icon} = this.props.categories.editCategory[0]
				this.setState({
					...this.state,
					name,
					type,
					icon
				})
			}else{
				this.setState({
					...this.state,
					name: "",
            		type: "expense",
            		icon: {},
				})
			}
		}
	  }
    componentWillReceiveProps(nextProps) {
        //Check if there is any error on submission and return it to the errors state
        if (nextProps.errors !== this.state.errors) {
          this.setState({
            errors: nextProps.errors
          });
		}
	}
	
  	//Handle Open, Close Modal on click away
	handleEditCategoryActivation = () => {
		const { editCategoryModalIsOpen } = this.props.categories;
		const action = !editCategoryModalIsOpen;
		this.props.toggleEditCategoryModal(action);
		this.props.clearErrors();
	};

	render() {
		const { errors, icons } = this.props;
		const { editCategoryModalIsOpen } = this.props.categories;
		const selectOptions = [ 'expense', 'income' ];
		const id = this.props.categories.editCategory;
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
