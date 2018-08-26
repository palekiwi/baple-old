import * as React from 'react';
import DivisionIndex from '../../../components/pages/DivisionIndex';

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
      welcome: any
    }
  }
}

class IndexPage extends React.Component<Props, {}> {
  render () {
    const data = this.props.data.plasticYaml;
    console.log(data);
    return (
      <DivisionIndex lang={"en"}
        welcome={data.welcome}
      />
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
      welcome {
        title
        subtitle1
        subtitle2
        img {
          childImageSharp {
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        logo {
          childImageSharp {
            sizes(maxWidth: 200) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
