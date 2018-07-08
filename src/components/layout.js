import React from 'react';
import PropTypes from 'prop-types';

import {rhythm} from '../utils/typography';

import '../assets/main.css';
import '../assets/prismjs-theme.css';
import NavBar from './nav-bar';

class Template extends React.Component {
	render() {
		const {children, location} = this.props;

		return (
			<div>
				<NavBar pathname={location.pathname} />

				<div
					style={{
						marginLeft: 'auto',
						marginRight: 'auto',
						maxWidth: rhythm(24),
						padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
					}}
				>
					{children}
				</div>

			</div>
		);
	}
}

Template.propTypes = {
	children: PropTypes.array.isRequired,
	location: PropTypes.object.isRequired,
};

export default Template;
