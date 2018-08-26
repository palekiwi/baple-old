import styled from 'styled-components'
import Img from 'gatsby-image';

import { widths, device, heights } from '../../styles/constants';

export const Image = styled(Img)`
  max-width: 100%;
  height: 300px;
  @media ${device.tablet} {
    height: auto;
  }
` 

export const ImageFH = styled(Img)`
  max-width: 100%;
  height: 300px;
  @media ${device.tablet} {
    min-height: calc(100vh - 64px);
  }
` 

export const Logo = styled(Img)`
  margin: 0 auto;
  max-width: 100px;
  height: auto;
`;
