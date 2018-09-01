import * as React from 'react';
import styled from "styled-components";
import Img from 'gatsby-image';
import Container from '../styled/Container';
import { Section } from '../styled/Section';
import TilesContainer from '../containers/TilesContainer';

interface Props {
  lang: Lang
  background: any
  logos: any
}

const Page = styled.div`
  min-height: 100vh;
  position: relative;
  background: black;
  z-index: -2;
  display: flex;
  align-items: center;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: black;
  opacity: 0.7;
`

const Image = styled(Img)`
  height: 100vh;
`

const Title = styled.h1`
  color: white;
  text-align: center;
  text-transform: uppercase;
`

const LogoTile = styled.div`
  align-items: center;
  border: 1px solid white;
  width: 150px;
  padding: 0.5em;
  background: white;
  margin: 5px;
  border-radius: 4px;
`

const LogoTileImg = styled(Img)`
`

const messages = {
  en: 'Baple.es is coming soon!',
  es: 'Baple.es is coming in Spanish!',
  zh: 'Baple.es is coming in Chinese!',
};

const UnderConstruction: React.SFC<Props> = ({ lang, background, logos }) => (
  <Page>
    <Background>
      <Image sizes={background.sizes}/>
      <Overlay/>
    </Background>
    <Section>
      <Title>{messages[lang]}</Title>
      <TilesContainer>
        {logos[lang].map((el:any, i:any) =>
          <LogoTile key={i}>
            <LogoTileImg sizes={el.logo.childImageSharp.sizes}/>
          </LogoTile>
        )}
      </TilesContainer>
    </Section>
  </Page>
);

export default UnderConstruction;
