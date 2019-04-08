import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Modal from "../../../components/modal/Modal";
import { getAccounts, addAccount, editAccount } from "../../../redux/actions/accountActions";
import { getCategories } from "../../../redux/actions/categoryActions";
import { setCurrentPage } from "../../../redux/actions/layoutActions";
import Title from "../../../components/typography/Title";
import SectionArea from "../../../components/grid/SectionArea";
import Form from '../../../components/forms/Form';
import InputField from '../../../components/forms/inputs/InputField';
import SelectField from '../../../components/forms/inputs/SelectField';
import SendButton from '../../../components/buttons/SendButton';

class AddCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            type: "expenses",
            icon: "",
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
        this.props.handleAddCategoryActivation();
    };
    //Handle Form Change
    handleChange = e => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
        ...this.state,
        [name]: value
        });
    };
    handleSubmit = e => {
        const CategoryFields = {};
        e.preventDefault();
        this.setState({
            ...this.state,
            name: "",
            startingBalance: "",
            actionId: ""
        });
        CategoryFields.name = this.state.name;
        CategoryFields.type = this.state.type;
        CategoryFields.icon = this.state.icon;
        this.props.editAccount(CategoryFields);
        this.handleAddCategoryActivation();
    };

    render() {
            const { errors } = this.props;
            const selectOptions = [
                'expenses',
                'incomes'
            ]
            return (
                <Modal
                    visible={this.props.addIsActive}
                    width="600"
                    height="350"
                    effect="fadeInUp"
                    onClickAway={this.handleAddCategoryActivation}
                >
                <Form action={this.handleSubmit} classes="EditAccount--form center--vertical center--horizontal">
                        <InputField
                            classes="column"
                            error={errors.name}
                            type="input"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            placeholder="Category Name"
                        />
                        <SelectField options={selectOptions} onChange={this.handleChange} name="type">
                        </SelectField>
                        <SendButton className="center"/>
                    </Form>
                </Modal>
            );
        }
}

AddCategory.propTypes = {
    categories: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    getCategories: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    categories: state.categories,
    errors: state.errors
  };
};
export default connect( mapStateToProps,  { getCategories })(AddCategory);
