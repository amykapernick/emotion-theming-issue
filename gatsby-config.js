module.exports = {
	plugins: [
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-emotion`,
			options: {
				sourceMap: true,
			}
		},
		{
			resolve: `gatsby-plugin-react-svg`,
			options: {
				include: `/${__dirname}/src/img/.*.svg$/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `landing_pages`,
				path: `${__dirname}/_data/landing_pages`
			}
		},
		{
			resolve: `gatsby-transformer-json`
		},
		{
			resolve: `gatsby-transformer-remark`,
		}
	]
};
