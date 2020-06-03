import styled from '@emotion/styled';

import Logo from '../../img/logo.svg';

export const Head = styled.header`
	background: #0893D2;
`;

export const HeaderLogo = styled(Logo)`
	width: 200px;
	height: 50px;

	.name {
		fill: ${(props) => (props.theme.colours.themes.header.lightLogo ? `#fff` : `#000`)};

	}
`;
