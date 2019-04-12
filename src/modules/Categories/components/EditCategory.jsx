import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Modal from "../../../components/modal/Modal";
import _ from "lodash";
import { getCategories, addCategory, clearErrors, toggleEditCategoryModal, editCategory } from "../../../redux/actions/categoryActions";
import { getIcons } from "../../../redux/actions/iconActions";
import FlexGridContainer from "../../../components/grid/FlexGridContainer";
import Form from "../../../components/forms/Form";
import InputField from "../../../components/forms/inputs/InputField";
import SelectField from "../../../components/forms/inputs/SelectField";
import SendButton from "../../../components/buttons/SendButton";
import IconTextArea from "../../../components/forms/inputs/IconTextArea";
import Title from "../../../components/typography/Title";
import CategoryPreview from "./CategoryPreview";

class EditCategory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			_id: "",
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
			if (!_.isEmpty(this.props.categories.editCategory)) {
				const { _id, name, type, icon } = this.props.categories.editCategory[0];
				this.setState({
					...this.state,
					_id,
					name,
					type,
					icon
				});
			} else {
				this.setState({
					...this.state,
					name: "",
					type: "expense",
					icon: {}
				});
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
	//Handle Form Change
	handleChange = e => {
		const target = e.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;
		//Clear Icon if switching between types
		if (name === "type") {
			this.setState({
				...this.state,
				[name]: value,
				icon: 'preview'
			});
		} else {
			this.setState({
				...this.state,
				[name]: value
			});
		}
	};
	handleSubmit = e => {
		this.props.clearErrors();
		const categoryFields = {
			_id: this.state._id,
			name: this.state.name,
			type: this.state.type
		};
		//Check if icon is set or use an empty string
		categoryFields.icon = this.state.icon.icon ? this.state.icon.icon : "default";
		//Send category action
		this.props.editCategory(categoryFields);
		this.props.toggleEditCategoryModal();
		e.preventDefault();
	};
	handleSelectedIcon = icon => {
		this.setState({
			...this.state,
			icon
		});
	};

	render() {
		const { errors, icons } = this.props;
		const { editCategoryModalIsOpen } = this.props.categories;
		const selectOptions = ["expense", "income"];
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
					<Form action={this.handleSubmit} classes="EditAccount--form center--vertical center--horizontal">
						<InputField
							classes="column m-t-10"
							error={errors.name}
							type="input"
							name="name"
							value={this.state.name}
							onChange={this.handleChange}
							placeholder="Category Name"
						/>
						<SelectField options={selectOptions} onChange={this.handleChange} name="type" classes="m-t-20" />
						<IconTextArea type={this.state.type} icons={icons.icons} handleSelectedIcon={this.handleSelectedIcon} />
						<CategoryPreview icon={this.state.icon} name={this.state.name} />
						<SendButton className="center" />
					</Form>
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

const mapStateToProps = state => {
	return {
		categories: state.categories,
		icons: state.icons,
		errors: state.errors
	};
};
export default connect(
	mapStateToProps,
	{ getCategories, getIcons, addCategory, clearErrors, toggleEditCategoryModal, editCategory }
)(EditCategory);
