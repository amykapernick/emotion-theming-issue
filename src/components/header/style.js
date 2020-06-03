import styled from '@emotion/styled';

import Logo from '../../img/logo.svg';

export const Head = styled.header`

`;

export const HeaderLogo = styled(Logo)`

	.name {
		fill: ${(props) => (props.theme.colours.themes.header.lightLogo ? `#fff` : `#000`)};

	}
`;
