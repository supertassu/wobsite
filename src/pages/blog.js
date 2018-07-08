import React from 'react';
import {Link, graphql} from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Bio from '../components/bio';
import Layout from '../components/layout';
import {rhythm} from '../utils/typography';

class IndexPage extends React.Component {
	render() {
		const posts = this.props.data.allMarkdownRemark.edges;

		return (
			<Layout location={this.props.location}>
				<Helmet title={`Blog · TASSU`} />
				<h1>Blog</h1>
				<p/>
				{(posts || []).map(({node}) => {
					const title = node.frontmatter.title || 'No title :/';
					return (
						<div key={node.id}>
							<h3
								style={{
									marginBottom: rhythm(1 / 4)
								}}
							>
								<Link style={{boxShadow: 'none'}} to={node.fields.slug}>
									{title}
								</Link>
							</h3>
							<small>{node.frontmatter.date}</small>
							<p>
								{node.excerpt}
							</p>
						</div>
					);
				})}

				<Bio/>

				{!(posts || []).length && 
					<div>
						<h1>No posts. gg</h1>
					</div>}
			</Layout>
		);
	}
}

IndexPage.propTypes = {
	location: PropTypes.object.isRequired
};

export default IndexPage;

export const query = graphql`
  query BlogQuery {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			totalCount

			edges {
				node {
					id

					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
					}

					fields {
						slug
					}
					
					excerpt
					html
				}
			}
		}	
  }
`;
