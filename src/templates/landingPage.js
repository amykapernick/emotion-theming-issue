import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

import theme from '../styles/theme';
import appThemes from '../styles/appThemes';

const LandingPageTemplate = (data) => {
	const pageTheme = data.pageContext.themeId,

		// console.log(`initial theme is ${JSON.stringify(theme)}`);

		// if (appThemes.hasOwnProperty(pageTheme)) {
		// 	console.log(`${data.location.pathname} has the custom theme of ${data.pageContext.themeId}, using it`);
		// 	altTheme = theme;
		// 	Object.keys(appThemes[pageTheme]).forEach((section) => {
		// 		altTheme.colours.themes[section] = appThemes[pageTheme][section];
		// 	});
		// } else {
		// 	console.log(`${data.location.pathname} does not have the custom theme of ${data.pageContext.themeId}, using the default theme`);
		// 	console.log(`alt theme is ${JSON.stringify(altTheme)}`);
		// }

		// console.log(`theme for ${data.location.pathname} is now ${JSON.stringify(altTheme)}`);

	 getSectionStyles = (pageTheme) => Object.keys(appThemes[pageTheme]).reduce((sections, section) => ({
			...sections,
			[section]: {
			  ...appThemes[pageTheme][section],
			},
		  }), {}),
	   getPageThemes = (pageTheme) => {
			if (appThemes.hasOwnProperty(pageTheme)) {
		  return {
					...theme,
					colours: {
			  ...theme.colours,
			  themes: getSectionStyles(pageTheme),
					},
		  };
			}
		  return theme;
	  },

	   altTheme = getPageThemes(pageTheme);

	return (
		<Layout {...{ altTheme, path: data.location.pathname }}>
			<h1>{data.data.landingPage.title}</h1>
			<p><a href="/">Link to Homepage (should have dark version of logo)</a></p>
			<p><a href="/business">Link to Business page (should have light version of logo)</a></p>
			<p><a href="/schools">Link to Schools page (should have light version of logo)</a></p>
			<p><a href="/homes">Link to Homes page (should have light version of logo)</a></p>
			<p><a href="/partners">Link to Partners page (should have dark version of logo)</a></p>
		</Layout>
	);
};

export default LandingPageTemplate;

export const pageQuery = graphql`
	query LandingPage($id: String!) {
		landingPage(id: {eq: $id}) {
			title
		}
	}
`;
