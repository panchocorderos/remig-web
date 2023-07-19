import styled from '@emotion/styled';

import { ViewportSizes } from '../../styles/theme';

const PageContainer = styled.div`
    margin: 0 auto;
    width: 335px;
    @font-face {
        font-family: ${({ theme }) => theme.fonts.name};
        src: url(${({ theme }) => theme.fonts.src}) format('truetype');
    }
    @media (min-width: ${ViewportSizes.Tablet}px) {
        width: 688px;
    }
    @media (min-width: ${ViewportSizes.Desktop}px) {
        width: 1216px;
    }
`;

export default PageContainer;