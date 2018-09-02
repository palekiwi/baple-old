import styled from 'styled-components';
import Img from 'gatsby-image';

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
  background: black;
  opacity: 0.7;
`

export const Image = styled(Img)`
  height: 100vh;
`

export const Title = styled.h1`
  color: white;
  text-align: center;
  text-transform: uppercase;
`

export const LogoTile = styled.div`
  align-items: center;
  border: 1px solid white;
  width: 150px;
  padding: 0.5em;
  background: white;
  margin: 5px;
  border-radius: 4px;
`

export const LogoTileImg = styled(Img)`
`
