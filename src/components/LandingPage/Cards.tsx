import * as React from 'react';
import styled from "styled-components";
import { device, colors, heights } from '../../styles/constants';

import fontawesome from '@fortawesome/fontawesome';
import * as FontAwesomeIcon from '@fortawesome/react-fontawesome'

import Container from '../Container';
import Img from 'gatsby-image';
import Link from '../../components/Link';

const tileBorder = `1px solid rgba(255,255,255,0.1)`;
const color = 'white';

const Image = styled(Img)`
  width: 80px;
`

const Title = styled.h3`
  color: ${color};
  text-transform: uppercase;
  letter-spacing: 1.5px;
`

const StyledTile = styled(Link)`
  margin: 1%;
  padding: 1em;
  cursor: pointer;
  position: relative;
  border-radius: 4px;
  background: rgba(255,255,255,0.9);
  display: flex;
  flex-basis: 30%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media ${device.tablet} {
  }
`

const Tile: React.SFC<Tile> = ({ lang, to, label, img }) => (
  <StyledTile to={to} lang={lang}>
    <Image sizes={img.sizes}/>
  </StyledTile>
);

const StyledLanding = styled.div`
  position: relative;
  background: black;
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
`
const Background = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  overflow: hidden;
`
const Overlay = styled.div`
  background: rgba(0,0,0,0.8);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`

const Tiles = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  width: 80%;
  justify-content: center;
`

const initialState = {};
type State = Readonly<typeof initialState>;

class LandingPage extends React.Component<LandingPageProps, State> {
  state = initialState

  render () {
    console.log(this.props.background);
    return (
      <StyledLanding>

        <Background>
          <Img sizes={this.props.background.sizes} />
          <Overlay />
        </Background>

        <Tiles>
          { this.props.sections.map((el, i) =>
            <Tile
              key={i}
              label={el.label}
              to={el.to}
              img={el.img.childImageSharp}
              lang={this.props.lang}
            />
          )}
        </Tiles>

      </StyledLanding>
    );
  }
}

export default LandingPage;
