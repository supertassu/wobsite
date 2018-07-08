import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import {rhythm, scale} from '../utils/typography';

class BlogPostTemplate extends React.Component {
	render() {
		const post = this.props.data.markdownRemark;
		const {previous, next} = this.props.pageContext;

		return (
			<Layout location={this.props.location}>
				<Helmet title={`${post.frontmatter.title} · TASSU`}/>
				<Link to="/blog">← Back to Blog index</Link>
				<h1>{post.frontmatter.title}</h1>
				<p
					style={{
						...scale(-1 / 5),
						display: 'block',
						marginBottom: rhythm(1),
						marginTop: rhythm(0)
					}}
				>
					{post.frontmatter.date}
				</p>
				<div dangerouslySetInnerHTML={{__html: post.html}}/>
				<Bio/>

				<ul
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-between',
						listStyle: 'none',
						padding: 0
					}}
				>
					{previous && (
						<li>
							<Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
							</Link>
						</li>
					)}

					{next && (
						<li>
							<Link to={next.fields.slug} rel="next">
								{next.frontmatter.title} →
							</Link>
						</li>
					)}
				</ul>
			</Layout>
		);
	}
}

BlogPostTemplate.propTypes = {
	pageContext: PropTypes.shape({
		previous: PropTypes.object,
		next: PropTypes.object
	}).isRequired,
	data: PropTypes.shape({
		markdownRemark: PropTypes.object.isRequired
	}).isRequired,
	location: PropTypes.object.isRequired
};

PropTypes.defaultProps = {
	pageContext: {
		previous: {},
		next: {}
	}
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
