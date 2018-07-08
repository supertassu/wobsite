import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';

import {rhythm} from '../utils/typography';

import '../assets/navbar.css';

const NavLink = ({current, to, children}) => (
	<Link to={to} className={current === to ? 'active nav' : 'nav'}>{children}</Link>
);

NavLink.propTypes = {
	current: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired
};

class NavBar extends React.Component {
	render() {
		const {pathname} = this.props;

		return (
			<div
				style={{
					marginTop: rhythm(1.2),
					marginBottom: rhythm(0.8),
					marginLeft: rhythm(0.8),
					marginRight: rhythm(0.8),
					fontSize: rhythm(1.3)
				}}
			>

				<nav>
					<li><NavLink to="/" current={pathname}>Tassu</NavLink></li>

					<li><NavLink to="/blog" current={pathname}>Blog</NavLink></li>
					<li><NavLink to="/who" current={pathname}>Who</NavLink></li>
					
					<div id="right-nav">
						<li><a href="https://github.com/supertassu">github</a></li>
						<li><a href="https://keybase.io/tassu">keybase</a></li>
					</div>
				</nav>

			</div>
		);
	}
}

NavBar.propTypes = {
	pathname: PropTypes.string.isRequired
};

export default NavBar;
