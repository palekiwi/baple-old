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
    pagesYaml: {
      divisions: any
    }
  }
}

class IndexPage extends React.Component<Props, {}> {
  render () {
    const data = this.props.data;
    return (
      <LandingPage
        sections={this.props.data.pagesYaml.divisions.en}
        lang={'en'}
      />
    );
  }
}

export default IndexPage;

export const query = graphql`
  query IndexQueryEN {
    site {
      siteMetadata {
        defLang
      }
    }
    pagesYaml(id: {regex: "/divisions/"}) {
     divisions {
      en {
        label
        to
        img  {
          childImageSharp {
            sizes(maxWidth: 400) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
     }
    }
  }
`;
