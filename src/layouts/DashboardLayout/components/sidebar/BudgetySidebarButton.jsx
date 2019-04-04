import React from "react";
import { connect } from "react-redux";
import { setCurrentPage } from "../../../../redux/actions/layoutActions";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BudgetySidebarButton = ({ icon, text, link, name, layout, setCurrentPage }) => {
  const onChangeCurrentPage = () => {
    setCurrentPage(name);
  };
  return (
    <Link to={link}>
      <div
        className={name === layout.currentPage ? `BudgetySidebarButton BudgetySidebarButton--active` : "BudgetySidebarButton"}
        onClick={onChangeCurrentPage}
      >
        <img src={icon} alt="icon home" className="BudgetySidebarIcon" width="16" />
        <p className="BudgetySidebarText">{text}</p>
      </div>
    </Link>
  );
};

BudgetySidebarButton.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  layout: PropTypes.object.isRequired,
  setCurrentPage: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    layout: state.layout
  };
};
export default connect(
  mapStateToProps,
  { setCurrentPage }
)(BudgetySidebarButton);
