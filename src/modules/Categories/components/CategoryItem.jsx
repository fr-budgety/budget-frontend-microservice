import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import Paper from "../../../components/grid/Paper";
import FlexGridContainer from "../../../components/grid/FlexGridContainer";
import { setIconPath } from '../../../util/setIconPath';
import { getIcons } from '../../../redux/actions/iconActions';
import ActionButtons from '../../../components/buttons/ActionButtons';

class CategoryItem extends Component {
  constructor(props) {
		super(props);
		this.state = {
			deleteConfirmationIsClosed: false
		};
  }

  componentDidMount(){
    this.props.getIcons();
  }

	handleToggleConfirmation = (_id) => {
    this.props.handleToggleConfirmation();
    this.props.setDeleteCategory(_id);
  };
  handleEditActivation = (_id) => {
    this.props.handleEditActivation(_id);
  }
  render() {
    const {_id, icon, name, type} = this.props.item;
    return (
      <React.Fragment>
        <Paper key={_id} className={`CategoryItem--container ${type}`}>
          <FlexGridContainer type="flex-space-between" className="CategoryItem" size="100">
              <div className="CategoryItem--icon">
                <img src={setIconPath(icon)} alt={name}/>
              </div>
              <div className="CategoryItem--icon">
              <p className="mt-2 mb-2 center darkColorAlt">{name}</p>
              </div>
              <div className="CategoryItem--actions">
                <ActionButtons type="editButton" onClick={()=>this.handleEditActivation(_id)}/>
                <ActionButtons type="deleteButton" onClick={()=>this.handleToggleConfirmation(_id)}/>
              </div>
          </FlexGridContainer>
        </Paper>
      </React.Fragment>
    )
  }
}

CategoryItem.propTypes = {
  icons: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return {
		icons: state.icons
	};
}

export default connect(mapStateToProps, {getIcons})(CategoryItem);