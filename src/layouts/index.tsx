import * as React from 'react';
import * as locale from '../utils/locale';
import { ThemeProvider } from "styled-components";
import { main as theme } from '../styles/themes';
import { isRoot } from '../utils/helpers';

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
  navigation: Array<any>
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
    logo: any
    pagesYaml: {
      navigation: any
    }
  }
}

class Layout extends React.Component<Props, State> {
  state: State = {lang: 'en', lock: false, navigation: []}

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
    // set navigation items dynamically
    const navigation = this.props.data.pagesYaml.navigation[this.state.lang]
      .find((x:any) => x.page == d).items;
    this.setState({navigation});
  }

  componentDidUpdate (prevProps:any) {
    // update navigation items dynamically
    const d = this.props.location.pathname.split('/')[2];
    if (prevProps.location.pathname.split('/')[2] !== d) {
      const page = d || 'root';
      const nav = this.props.data.pagesYaml.navigation[this.state.lang];
      const navigation = nav.find((x:any) => x.page == page).items;
      this.setState({navigation});
    }
  }

  private setLang = (lang: Lang) => {
    locale.saveLocale(lang);
    this.setState({lang});
  }

  private toggleLock = (b: boolean) => {
    console.log('toggling', b);
    this.setState({lock: b});
  }

  render () {
    const {children, data, location} = this.props;
    return (
      <ThemeProvider theme={theme}>
        <LayoutRoot lock={this.state.lock}>
          <Helmet
            title={data.site.siteMetadata.title[this.state.lang]}
            meta={[
              {name: 'description', content: 'Baple Group'},
            ]}
          />
          <Header
            toggleLock={this.toggleLock}
            setLang={this.setLang}
            lang={this.state.lang}
            title={this.props.data.site.siteMetadata.title}
            logo={this.props.data.logo}
            items={this.state.navigation}
          />
          <LayoutMain>
            {children({...this.props, ...this.state})}
          </LayoutMain>
        </LayoutRoot>
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
      }
    }
    pagesYaml(id: {regex: "/navigation/"}) {
      navigation {
        en {
          page
          items {
            to
            label
          }
        }
      }
    }
    logo: imageSharp(id: {regex: "/logos\/baple-group.png/"}) {
      resolutions(quality: 100) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`;
