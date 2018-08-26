import * as React from 'react';
import { Panes, Pane } from '../styled/PanesStyles';

interface Props {
}

const PanesContainer: React.SFC<Props> = ({ children }) => (
  <Panes>
    { React.Children.map(children, (child, i) => (
        <Pane key={i}>
          { child }
        </Pane>
      ))
    }
  </Panes>
);

export default PanesContainer;
