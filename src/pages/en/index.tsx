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
      navigation: any
    }
    background: any
  }
}

class IndexPage extends React.Component<Props, {}> {
  render () {
    const data = this.props.data;
    console.log(this.props.data.background);
    return (
      <LandingPage
        sections={this.props.data.pagesYaml.navigation.en}
        background={this.props.data.background}
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
    background: imageSharp(id: {regex: "/plastic-welcome.jpg/"}) {
      sizes(maxWidth: 1920, quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    pagesYaml(id: {regex: "/navigation.yml/"}) {
     navigation {
      en {
        title
        home
        logo  {
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
