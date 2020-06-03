import React, { Fragment } from 'react';
import { ThemeProvider } from 'emotion-theming';

import Header from '../header';

import { Main } from './style';
import theme from '../../styles/theme';

const Layout = ({
	children, altTheme
}) => (
	<ThemeProvider theme={altTheme || theme}>
		<Fragment>
			<Header />
			<Main>{children}</Main>
			<h2>Theme Prop</h2>
			<pre>{JSON.stringify(theme)}</pre>
		</Fragment>
	</ThemeProvider>
);

export default Layout;
