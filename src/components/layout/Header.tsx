import * as React from 'react';
import styled from "styled-components";
import Link from '../../components/Link';

import ContainerFluid from '../../components/ContainerFluid';
import Navigation from './Navigation';

import { device, widths, heights } from '../../styles/constants';

const StyledHeader = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  background-color: ${props => props.theme.white};
  height: ${heights.header}px;
  z-index: 98;
`
const HeaderInner = styled(ContainerFluid)`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`

const Brand = styled(Link)`
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
`

const Logo = styled.img`
  height: ${heights.header - 24}px;
  margin: 0 12px;
`

const Brandname = styled.h4`
  display: none;
  @media ${device.tablet} {
    display: block;
  }
  &, &:visited {
    color: ${props => props.theme.black};
    margin: 0;
    padding: 0;
    padding-left: 1em;
    font-weight: 300;
    text-transform: uppercase;
  }
`

interface Props {
  lang: Lang
  logo: any
  title: string
  home: string
  setLang: setLang
  toggleLock: (b: boolean) => void
  items: any
}

const Header: React.SFC<Props> = ({setLang, lang, logo, title, home, toggleLock, items}) => (
  <StyledHeader>
    <HeaderInner>
      <Brand to={home} lang={lang}>
        {logo && <Logo src={logo.childImageSharp.sizes.src}/>}
        <Brandname>{title}</Brandname>
      </Brand>
      <Navigation
        logo={logo}
        home={home}
        toggleLock={toggleLock}
        setLang={setLang}
        lang={lang}
        items={items}
      />
    </HeaderInner>
  </StyledHeader>
);

export default Header;
