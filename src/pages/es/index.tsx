import * as React from 'react';

import LandingPage from '../../components/LandingPage';

interface Props {
  lang: Lang
  data: {
    site: {
      siteMetadata: {
        title: string
        defLang: string
      }
    }
  }
}

class IndexPage extends React.Component<Props, {}> {
  render () {
    const data = this.props.data;
    return (
      <div>Baple Espanol</div>
    );
  }
}

export default IndexPage;

export const query = graphql`
  query IndexQueryES {
    site {
      siteMetadata {
        defLang
      }
    }
  }
`;
