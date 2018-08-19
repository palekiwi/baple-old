import * as React from 'react';
import { navigateTo } from 'gatsby-link';

interface Props {
  lang: Lang
}

class IndexPage extends React.Component<Props, {}> {
  componentDidUpdate () {
    navigateTo(`/${this.props.lang}/`);
  }
  render () {
    return (
      <div>index</div>
    );
  }
}

export default IndexPage;
