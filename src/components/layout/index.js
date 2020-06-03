import React, { Fragment } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';

import Header from '../header';

import { Main } from './style';
import theme from '../../styles/theme';

const Layout = ({
	children, altTheme, path
}) => {
	console.log(`${JSON.stringify(altTheme)} has been provided as the theme for this page, ${path}`);

	let pageTheme = theme;

	console.log(`Theme for ${path} has been set as ${JSON.stringify(pageTheme)}`);

	if (altTheme) {
		console.log(`Alt theme for ${path} has been provided, setting pageTheme to ${altTheme}`);
		pageTheme = altTheme;
	}

	console.log(`Theme for ${path} has now been set as ${JSON.stringify(pageTheme)}`);

	return (
		<ThemeProvider theme={pageTheme}>
			<Fragment>
				<Global
					styles={{
						head: {
							display: `block !important`,
						},
						'head style': {
							display: `block !important`,
							fontFamily: `monospace`,
							width: `80vw`,
							padding: `20px 40px`
						}
					}}
				/>
				<Header />
				<Main>{children}</Main>
				<h2>Theme Prop</h2>
				<pre>{JSON.stringify(theme)}</pre>
			</Fragment>
		</ThemeProvider>
	);
};

export default Layout;
