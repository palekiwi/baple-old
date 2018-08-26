import * as React from 'react';

interface Props {
  title: string
  to: string
  img: any
}

const LogoContainer: React.SFC<Props> = ({ title, to, img }) => (
  <div>
    Logo
  </div>
);

export default LogoContainer;
