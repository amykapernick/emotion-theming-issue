module.exports = {
	plugins: [
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Source Sans Pro`,
						variants: [`300`, `400`, `600`, `700`]
					}
				]
			}
		},
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
