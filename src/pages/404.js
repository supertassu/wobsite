import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';

import Layout from '../components/layout';

const NotFoundPage = ({location}) => (
	<Layout location={location}>
		<h1>The Darkness</h1>
		<h2>You found... nothing?</h2>
		<Link to="/">Back to the beginning</Link>
	</Layout>
);

NotFoundPage.propTypes = {
	location: PropTypes.object.isRequired
};

export default NotFoundPage;
