import * as React from 'react';
import WelcomeDivision from '../structural/WelcomeDivision';
import ProductIcons from '../structural/ProductIcons';

interface Props {
  lang: Lang
  welcome: any
  icons: any
}


const DivisionIndex: React.SFC<Props> = ({ welcome, icons }) => (
  <div>
    <WelcomeDivision content={welcome} />
    <ProductIcons content={icons} />
  </div>
);

export default DivisionIndex;
