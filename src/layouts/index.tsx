import * as React from 'react';
import * as locale from '../utils/locale';
import { ThemeProvider } from "styled-components";
import { main as theme } from '../styles/themes';
import { isRoot } from '../utils/helpers';
import UnderConstruction from '../components/pages/UnderConstruction';

import fontawesome from '@fortawesome/fontawesome';
import * as FontAwesomeIcon from '@fortawesome/react-fontawesome'
import * as faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'

fontawesome.library.add(faCoffee);

import Helmet from 'react-helmet';
import LayoutRoot from '../components/layout/LayoutRoot';
import LayoutMain from '../components/layout/LayoutMain';
import Header from '../components/layout/Header';

interface State {
  lang: Lang
  lock: boolean
  navigation: {
    title: string
    logo: any
    home: string
    items: Array<any>
  }
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
        underConstruction: boolean
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
    lang: 'es',
    lock: false,
    navigation: {
      items: [],
      title: 'Baple',
      logo: null,
      home: '/'
    }
  }

  componentDidMount () {
    const pref = this.props.location.pathname.substr(1,2);
    if (pref == 'en') {
      this.setState({lang: 'en'});
    } else if (pref == 'zh') {
      this.setState({lang: 'zh'});
    } else {
      this.setState({lang: locale.getLocale()});
    }
    const d = this.props.location.pathname.split('/')[2] || 'root';
    // set navigation object dynamically
    const nav = this.props.data.pagesYaml.navigation[this.state.lang];
    const navigation = nav.find((x:any) => x.page == d) || nav.find((x:any) => x.page == 'root');
    this.setState({navigation});
  }

  componentDidUpdate (prevProps:any) {
    // update navigation items dynamically
    const d = this.props.location.pathname.split('/')[2];
    if (prevProps.location.pathname.split('/')[2] !== d) {
      const page = d || 'root';
      const nav = this.props.data.pagesYaml.navigation[this.state.lang];
      const navigation = nav.find((x:any) => x.page == d) || nav.find((x:any) => x.page == 'root');
      this.setState({navigation});
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
    console.log(this.state.lang);
    return (
      <ThemeProvider theme={theme}>
        { data.site.siteMetadata.underConstruction ?
          <div>
            <Helmet
              title={this.state.navigation.title}
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
          :
          <LayoutRoot lock={this.state.lock}>
            <Helmet
              title={this.state.navigation.title}
              meta={[
                {name: 'description', content: 'Baple Group'},
              ]}
            />
            <Header
              toggleLock={this.toggleLock}
              setLang={this.setLang}
              lang={this.state.lang}
              title={this.state.navigation.title}
              home={this.state.navigation.home}
              logo={this.state.navigation.logo}
              items={this.state.navigation.items}
            />
            <LayoutMain>
              {children({...this.props, ...this.state})}
            </LayoutMain>
          </LayoutRoot>
        }
      </ThemeProvider>
    );
  }
}

export default Layout;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title {
          en
          zh
          es
        }
        underConstruction
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
          page
          home
          title
          logo {
            childImageSharp {
              sizes(maxWidth: 200) {
                ...GatsbyImageSharpSizes
              }
            }
          }
          items {
            to
            label
          }
        }
        es {
          page
          home
          title
          logo {
            childImageSharp {
              sizes(maxWidth: 200) {
                ...GatsbyImageSharpSizes
              }
            }
          }
          items {
            to
            label
          }
        }
        zh {
          page
          home
          title
          logo {
            childImageSharp {
              sizes(maxWidth: 200) {
                ...GatsbyImageSharpSizes
              }
            }
          }
          items {
            to
            label
          }
        }
      }
    }
  }
`;
