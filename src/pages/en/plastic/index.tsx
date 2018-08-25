import * as React from 'react';
import SimplePage from '../../../components/pages/SimplePage';

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
      <SimplePage lang={"en"} sections={data.plasticYaml.sections}/>
    );
  }
}

export default IndexPage;

export const query = graphql`
  query PlasticIndexQueryEN {
    site {
      siteMetadata {
        defLang
      }
    }
    plasticYaml(id: {regex: "/index-en/"}) {
      sections {
        format
        title
        paragraphs
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
