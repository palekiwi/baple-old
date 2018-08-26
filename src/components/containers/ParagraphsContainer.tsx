import * as React from 'react';
import { Tiles, Tile } from '../styled/TilesStyles';

interface Props {
  children: string
}

const ParagraphsContainer: React.SFC<Props> = ({ children }) => (
  <div>
    {children.split('\n').map(t => <p>{t}</p>)}
  </div>
);

export default ParagraphsContainer;
