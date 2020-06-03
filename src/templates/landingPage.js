import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

import theme from '../styles/theme';
import appThemes from '../styles/appThemes';

const LandingPageTemplate = (data) => {
	const pageTheme = data.pageContext.themeId;

	let altTheme;

	if (appThemes.hasOwnProperty(pageTheme)) {
		altTheme = theme;
		Object.keys(appThemes[pageTheme]).forEach((section) => {
			altTheme.colours.themes[section] = appThemes[pageTheme][section];
		});
	}

	return (
		<Layout {...{ altTheme }}>
			<h1>Click links between pages</h1>
			<a href="/business">Page should have light version of logo</a><br/>
			<a href="/">Page should have dark version of logo</a>
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
