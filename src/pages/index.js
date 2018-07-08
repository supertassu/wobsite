import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Template from '../components/layout';
import Bio from '../components/bio';

class IndexPage extends React.Component {
	render() {
		return (
			<Template location={this.props.location}>
				<Helmet title={"TASSU"} />

				<h1>TASSU Development</h1>
				<p>(also totally wip website)</p>
				
				<div/>

				<hr/>
				<Bio />
			</Template>
		);
	}
}

IndexPage.propTypes = {
	location: PropTypes.object.isRequired
};

export default IndexPage;
