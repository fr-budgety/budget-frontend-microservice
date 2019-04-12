import React, { Component } from 'react';
import PropTypes from "prop-types";
import Paper from "../../../components/grid/Paper";
import FlexGridContainer from "../../../components/grid/FlexGridContainer";
import { setIconPath } from '../../../util/setIconPath';


class CategoryPreview extends Component {
  render() {
    const {icon, name} = this.props;
    console.log('the icon: ', icon);
    return (
        <Paper className="CategoryPreview--container m-t-30">
          <FlexGridContainer className="CategoryPreview no-wrap p-r-15 p-l-15" size="100">
              <div className="CategoryPreview--icon">
              {icon ?
                <img src={setIconPath(icon)} alt={icon}/>
                    :
                <img src={setIconPath('preview')} alt={icon}/>
              }
              </div>
              <div className="CategoryPreview--text">
              {name ?
                <p className="center darkColorAlt m-l-10">{name}</p>
                :
                <p className="center darkColorAlt m-l-10">Category Preview</p>
              }
              </div>
          </FlexGridContainer>
        </Paper>
    )
  }
}

CategoryPreview.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string
}

export default CategoryPreview;