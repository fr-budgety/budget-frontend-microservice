import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { deleteCategory } from '../../../redux/actions/categoryActions';
import Paper from "../../../components/grid/Paper";
import Title from "../../../components/typography/Title";
import FlexGridContainer from "../../../components/grid/FlexGridContainer";
import { setIconPath } from '../../../util/setIconPath';
import ActionButtons from '../../../components/buttons/ActionButtons';
import Confirmation from '../../../components/confirmation/Confirmation';

class CategoryItem extends Component {
  constructor(props) {
		super(props);
		this.state = {
			deleteConfirmationIsClosed: false
		};
	}

	handleToggleConfirmation = () => {
		this.setState({
			deleteConfirmationIsClosed: !this.state.deleteConfirmationIsClosed
		});
  };
  handleDeleteCategory = () => {
		const { _id } = this.props.item;
    this.props.deleteCategory(_id);
    this.handleToggleConfirmation();
	};
  render() {
    const {_id, icon, name} = this.props.item;
    return (
      <React.Fragment>
        <Paper key={_id} className="CategoryItem--container">
          <FlexGridContainer type="flex-space-between" className="CategoryItem">
              <div className="CategoryItem--icon">
                <img src={setIconPath(icon)} alt={name}/>
              </div>
              <div className="CategoryItem--icon">
              <p className="mt-2 mb-2 center darkColorAlt">{name}</p>
              </div>
              <div className="CategoryItem--actions">
                <ActionButtons type="editButton" />
                <ActionButtons type="deleteButton" onClick={()=>this.handleToggleConfirmation(_id)}/>
              </div>
          </FlexGridContainer>
        </Paper>
        <Confirmation
					visible={this.state.deleteConfirmationIsClosed}
					onConfirmationModalClose={this.handleToggleConfirmation}
					handleConfirmationCallback={this.handleDeleteCategory}
				>
					<Title variant="h2" color="alt">
						Are you sure you want to delete this category?
					</Title>
					<p className="darkColorAlt">You will delete this category and all related expenses.</p>
				</Confirmation>
      </React.Fragment>
    )
  }
}

CategoryItem.propTypes = {
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
		categories: state.categories
	};
}

export default connect(mapStateToProps, {deleteCategory})(CategoryItem);