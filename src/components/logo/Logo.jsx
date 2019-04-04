import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LogoImg from './logo-budgety.svg';
import LogoImgAlt from './budgety_alt.svg';

const Logo = ({ width, type }) => {
	return (
		<Link to="/">
			{type === 'default' ? (
				<img src={LogoImg} width={width} alt="Budgety Logo" />
			) : (
				<img src={LogoImgAlt} width={width} alt="Budgety Logo" />
			)}
		</Link>
	);
};
Logo.defaultProps = {
	width: '245px',
	type: 'default'
};
Logo.propTypes = {
	width: PropTypes.string,
	type: PropTypes.string
};

export default Logo;
