module.exports = {
	siteMetadata: {
		title: 'TASSU',
		author: 'Tassu',
		description: 'Tassu\'s blog.',
		siteUrl: 'https://tassu.me/'
	},
	pathPrefix: '/',
	plugins: [
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Space+Mono`
				]
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/blog`,
				name: 'blog'
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590
						}
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`
						}
					},
					'gatsby-remark-prismjs',
					'gatsby-remark-copy-linked-files',
					'gatsby-remark-smartypants',
					'gatsby-remark-prismjs'
				]
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		// {
		//   resolve: `gatsby-plugin-google-analytics`,
		//   options: {
		//     //trackingId: `ADD YOUR TRACKING ID HERE`,
		//   },
		// },
		`gatsby-plugin-feed`,
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: 'gatsby-plugin-typography',
			options: {
				pathToConfigModule: 'src/utils/typography'
			}
		}
	]
};
