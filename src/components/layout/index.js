import React, { Fragment } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';

import Header from '../header';

import { Main } from './style';
import theme from '../../styles/theme';

const Layout = ({
	children, altTheme
}) => (
	<ThemeProvider theme={altTheme || theme}>
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

export default Layout;
