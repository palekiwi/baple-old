import * as React from 'react';
import * as locale from '../utils/locale';
import { ThemeProvider } from "styled-components";
import { main as theme } from '../styles/themes';
import { isRoot } from '../utils/helpers';

import UnderConstruction from '../components/pages/UnderConstruction';

import Helmet from 'react-helmet';

interface State {
  lang: Lang
  lock: boolean
};

interface Props {
  children: any
  location: {
    pathname: string
  }
  data: {
    site: {
      siteMetadata: {
        title: {
          es: string
          en: string
          zh: string
        }
      }
    }
    background: any
    pagesYaml: {
      navigation: any
    }
  }
}

class Layout extends React.Component<Props, State> {
  state: State = {
    lang: 'en',
    lock: false
  }

  componentDidMount () {
    const pref = this.props.location.pathname.substr(1,2);
    if (pref == 'en') {
      this.setState({lang: 'en'});
    } else if (pref == 'es') {
      this.setState({lang: 'es'});
    } else if (pref == 'zh') {
      this.setState({lang: 'zh'});
    } else {
      this.setState({lang: locale.getLocale()});
    }
  }

  private setLang = (lang: Lang) => {
    locale.saveLocale(lang);
    this.setState({lang});
  }

  private toggleLock = (b: boolean) => {
    this.setState({lock: b});
  }

  render () {
    const {children, data, location} = this.props;
    console.log(data.pagesYaml.navigation);
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Helmet
            title={data.site.siteMetadata.title[this.state.lang]}
            meta={[
              {name: 'description', content: 'Baple Group'},
            ]}
          />
          <UnderConstruction
            lang={this.state.lang}
            background={data.background}
            logos={data.pagesYaml.navigation}
          />
        </div>
      </ThemeProvider>
    );
  }
}

export default Layout;

export const query = graphql`
  query LayoutQueryUC {
    site {
      siteMetadata {
        title {
          en
          zh
          es
        }
      }
    }
    background: imageSharp(id: {regex: "/welcome.jpg/"}) {
      sizes(maxWidth: 1920, quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    pagesYaml(id: {regex: "/navigation/"}) {
      navigation {
        en {
          logo {
            childImageSharp {
              sizes(maxWidth: 200) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
        es {
          logo {
            childImageSharp {
              sizes(maxWidth: 200) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
        zh {
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
  }
`;
