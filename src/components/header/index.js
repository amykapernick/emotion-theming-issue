import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';


import { Head, HeaderLogo } from './style';

const Header = () => (
	<Head>
		<Link to="/"><HeaderLogo/></Link>
	</Head>
);

export default Header;
