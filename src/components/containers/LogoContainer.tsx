import * as React from 'react';
import Link from 'gatsby-link';
import { Logo, Image } from '../styled/LogoStyles';

interface Props {
  title: string
  to: string
  img: any
}

const LogoContainer: React.SFC<Props> = ({ title, to, img }) => (
  <Logo>
    <Link to={to}>
      <Image sizes={img.childImageSharp.sizes} />
    </Link>
  </Logo>
);

export default LogoContainer;
