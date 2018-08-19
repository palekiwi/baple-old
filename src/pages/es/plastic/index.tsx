import * as React from 'react';

interface Props {
  lang: Lang
  data: {
    site: {
      siteMetadata: {
        title: string
        defLang: string
      }
    }
    plasticYaml: {
      sections: any
    }
  }
}

class IndexPage extends React.Component<Props, {}> {
  render () {
    const data = this.props.data;
    return (
      <div>Baple Wines</div>
    );
  }
}

export default IndexPage;

export const query = graphql`
  query PlasticIndexQueryES {
    site {
      siteMetadata {
        defLang
      }
    }
    plasticYaml(id: {regex: "/index-en/"}) {
      sections {
        title
        img {
          childImageSharp {
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
