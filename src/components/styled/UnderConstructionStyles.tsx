import styled from 'styled-components';
import Img from 'gatsby-image';
import { widths, device, heights } from '../../styles/constants';

export const Page = styled.div`
  min-height: 100vh;
  position: relative;
  background: black;
  z-index: -2;
  display: flex;
  align-items: center;
`

export const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%,rgba(0,0,0,1) 100%);
`

export const Image = styled(Img)`
  width: 100%;
  height: auto;
  @media ${device.tablet} {
    height: 100vh;
  }
`

export const Title = styled.h1`
  color: white;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 0.3em;
`

export const Subtitle = styled.h2`
  color: white;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
`

export const LogoTile = styled.div`
  align-items: center;
  border: 1px solid white;
  width: 120px;
  padding: 0.5em;
  background: white;
  margin: 5px;
  border-radius: 4px;
  @media ${device.tablet} {
    width: 150px;
  }
`

export const LogoTileImg = styled(Img)`
`
