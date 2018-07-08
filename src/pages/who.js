import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Bio from '../components/bio';
import Layout from '../components/layout';

class WhoPage extends React.Component {
	render() {
		return (
			<Layout location={this.props.location}>
				<Helmet title={`Who · TASSU`}/>
        <div>
            <h1>In construction.</h1>
        </div>
				<Bio/>
			</Layout>
		);
	}
}

WhoPage.propTypes = {
	location: PropTypes.object.isRequired
};

export default WhoPage;
