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
		</Fragment>
	</ThemeProvider>
);

export default Layout;
