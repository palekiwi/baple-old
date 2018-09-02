import * as React from 'react';
import styled from "styled-components";
import Container from '../styled/Container';
import { Section } from '../styled/Section';
import TilesContainer from '../containers/TilesContainer';
import { Page, Background, Overlay, LogoTile, LogoTileImg, Image, Title } from '../styled/UnderConstructionStyles';

interface Props {
  lang: Lang
  background: any
  logos: any
}


const messages = {
  en: 'Baple.es is coming soon!',
  es: 'Baple.es en Espanol!',
  zh: 'Baple.es 快來了!',
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
        {logos[lang].filter((el:any) => el.logo).map((el:any, i:any) =>
          <LogoTile key={i}>
            <LogoTileImg sizes={el.logo.childImageSharp.sizes}/>
          </LogoTile>
        )}
      </TilesContainer>
    </Section>
  </Page>
);

export default UnderConstruction;
