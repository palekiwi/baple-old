import * as React from 'react';
import PanesContainer from '../containers/PanesContainer';
import Container from '../styled/Container';
import { Section, SectionCentered } from '../styled/Section';
import { Title1 } from '../styled/TitleStyles';
import { Subtitle1 } from '../styled/SubtitleStyles';
import { ImageFH, Logo } from '../styled/ImageStyles';

interface Props {
  content: {
    title: string
    img: any
    subtitle1: string
    subtitle2: string
    logo: any
  }
}


const WelcomeDivision: React.SFC<Props> = ({ content }) => (
  <Container>
    <PanesContainer>
      <ImageFH sizes={content.img.childImageSharp.sizes} />
      <SectionCentered>
        <Logo sizes={content.logo.childImageSharp.sizes} />
        <Title1>
          {content.title}
        </Title1>
        <Subtitle1>
          {content.subtitle1}
        </Subtitle1>
        <Subtitle1>
          {content.subtitle2}
        </Subtitle1>
      </SectionCentered>
    </PanesContainer>
  </Container>
);

export default WelcomeDivision;
