import * as React from 'react';
import WelcomeDivision from '../structural/WelcomeDivision';

interface Props {
  lang: Lang
  welcome: {
    title: string
    img: any
    subtitle1: string
    subtitle2: string
    logo: any
  }
}


const DivisionIndex: React.SFC<Props> = ({ welcome }) => (
  <div>
    <WelcomeDivision content={welcome} />
  </div>
);

export default DivisionIndex;
