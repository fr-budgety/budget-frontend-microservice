import React, { Component } from 'react';
import PropTypes from "prop-types";
import Paper from "../../../components/grid/Paper";
import Title from "../../../components/typography/Title";
import FlexGridContainer from "../../../components/grid/FlexGridContainer";
import { setIconPath } from '../../../util/setIconPath';
import ActionButtons from '../../../components/buttons/ActionButtons';

export default class CategoryItem extends Component {
  render() {
    const {_id, icon, name} = this.props.item;
    return (
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
								<ActionButtons type="deleteButton" />
            </div>
        </FlexGridContainer>
      </Paper>
    )
  }
}

CategoryItem.propTypes = {
  item: PropTypes.object.isRequired
}
