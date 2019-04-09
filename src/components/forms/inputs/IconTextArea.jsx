import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {setIconPath} from '../../../util/setIconPath';

export default class IconTextArea extends Component {
  handleSelectedIcon = (icon)=>{
    this.props.handleSelectedIcon(icon);
  }
  //Filter category from redux state by type
  filterIconsByType = (initialArr, type) => {
    if(initialArr){
        let newArr = initialArr.filter(item => item.type === type);
        return newArr;
    }
  }
  
  render() {
    const {icons,type} = this.props;
    const filteredIcons = this.filterIconsByType(icons, type);

    return (
      <React.Fragment>
      <div className="IconTextArea">
        {filteredIcons && filteredIcons.map(icon=>{
          return (<img className="IconTextArea--icon" src={setIconPath(icon.icon)} alt={icon.icon} onClick={()=>this.handleSelectedIcon(icon)}/>)
        })}
      </div>
      <small className="helper-text IconTextArea--helper">Please, select a category icon. </small>
      </React.Fragment>
    )
  }
}

IconTextArea.propTypes = {
    type: PropTypes.string.isRequired,
    icons: PropTypes.array.isRequired,
    handleSelectedIcon: PropTypes.func.isRequired
}