import * as React from 'react';
import { Tiles, Tile } from '../styled/TilesStyles';

interface Props {
}

const TilesContainer: React.SFC<Props> = ({ children }) => (
  <Tiles>
    { React.Children.map(children, (child, i) => (
        <Tile key={i}>
          { child }
        </Tile>
      ))
    }
  </Tiles>
);

export default TilesContainer;
