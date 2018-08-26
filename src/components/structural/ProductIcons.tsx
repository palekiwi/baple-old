import * as React from 'react';
import Container from '../styled/Container';
import TilesContainer from '../containers/TilesContainer';
import LogoContainer from '../containers/LogoContainer';
import { Logo } from '../styled/ImageStyles';

interface Item {
  title: string
  img: any
  to: string
}

interface Props {
  content: {
    title: string
    items: Array<Item>
  }
}


const ProductIcons: React.SFC<Props> = ({ content }) => (
  <Container>
    <TilesContainer>
      {content.items.map((el, i) => <LogoContainer key={i} {...el}/>)}
    </TilesContainer>
  </Container>
);

export default ProductIcons;
