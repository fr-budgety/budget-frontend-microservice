import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Modal from "../../../components/modal/Modal";
import { getCategories, addCategory, clearErrors, toggleAddCategoryModal } from "../../../redux/actions/categoryActions";
import { getIcons } from "../../../redux/actions/iconActions";
import FlexGridContainer from '../../../components/grid/FlexGridContainer';
import Form from '../../../components/forms/Form';
import InputField from '../../../components/forms/inputs/InputField';
import SelectField from '../../../components/forms/inputs/SelectField';
import SendButton from '../../../components/buttons/SendButton';
import IconTextArea from "../../../components/forms/inputs/IconTextArea";
import Title from '../../../components/typography/Title';
import CategoryPreview from "./CategoryPreview";

class AddCategory extends Component {
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
        //Get all categories into state
        this.props.getCategories();
        //Get all icons into state
        this.props.getIcons();
    }
    componentWillReceiveProps(nextProps) {
        //Check if there is any error on submission and return it to the errors state
        if (nextProps.errors !== this.state.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
    }

    handleAddCategoryActivation = () => {
        const { addCategoryModalIsOpen } = this.props.categories;
        const action = !addCategoryModalIsOpen;
        this.props.toggleAddCategoryModal(action);
    };
    //Handle Form Change
    handleChange = e => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        //Clear Icon if switching between types
        if(name==='type'){
            this.setState({
                ...this.state,
                [name]: value,
                icon:{}
            })
        }else{
            this.setState({
                ...this.state,
                [name]: value,
            })
        }
    };
    handleSubmit = e => {
        this.props.clearErrors();
        const categoryFields = {
            name: this.state.name,
            type: this.state.type,
        }
        //Check if icon is set or use an empty string
        categoryFields.icon = this.state.icon.icon ? this.state.icon.icon : '';
        //Send category action
        this.props.addCategory(categoryFields);
        e.preventDefault();
    };
    handleSelectedIcon = (icon)=>{
        this.setState({
            ...this.state,
            icon
        })
    }

    render() {
            const { errors,icons } = this.props;
            const { addCategoryModalIsOpen } = this.props.categories;
            const selectOptions = [
                'expense',
                'income'
            ]
            return (
                <Modal
                    visible={addCategoryModalIsOpen}
                    width="600"
                    height="650"
                    effect="fadeInUp"
                    onClickAway={this.handleAddCategoryActivation}
                >
                <FlexGridContainer size={100} className="v-flex-container flex-center">
                    <Title variant="h2" color="alt" className="m-l-15 m-b-30">Select category attributes:</Title>
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
                            <SelectField options={selectOptions} onChange={this.handleChange} name="type" classes="m-t-20">
                            </SelectField>
                            <IconTextArea type={this.state.type} icons={icons.icons} handleSelectedIcon={this.handleSelectedIcon}/>
                            <CategoryPreview icon={this.state.icon.icon} name={this.state.name}/>
                            <SendButton className="center"/>
                        </Form>
                </FlexGridContainer>
                </Modal>
            );
        }
}

AddCategory.propTypes = {
    categories: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    icons: PropTypes.object.isRequired,
    getCategories: PropTypes.func.isRequired,
    addCategory: PropTypes.func.isRequired,
    getIcons: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    toggleAddCategoryModal: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    categories: state.categories,
    icons: state.icons,
    errors: state.errors,
  };
};
export default connect( mapStateToProps,  { getCategories, getIcons, addCategory, clearErrors, toggleAddCategoryModal })(AddCategory);
