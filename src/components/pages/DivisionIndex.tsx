import * as React from 'react';
import Img from 'gatsby-image';
import { Welcome } from '../layout/Welcome';
import TilesContainer from '../containers/TilesContainer';

interface Props {
  lang: Lang
  welcome: {
    title: string
    img: any
    text: string
    logo: any
  }
}


const DivisionIndex: React.SFC<Props> = ({ welcome }) => (
  <TilesContainer>
    {['one', 'two', 'three'].map(el => <p>{el}</p>)}
  </TilesContainer>
);

export default DivisionIndex;
