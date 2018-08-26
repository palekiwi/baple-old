import * as React from 'react';
import styled from 'styled-components';

const padding = {
  small: '3rem 1.5rem',
  medium: '9rem 1.5rem',
  large: '18rem 1.5rem'
};

interface SectionProps {
  className?: string
  background?: string
  size?: 'small' | 'medium' | 'large'
}

const El: React.SFC<SectionProps> = (props) => (
  <section className={props.className}>{props.children}</section>
);

export const Section = styled(El)`
  padding: ${props => padding[props.size]};
  width: 100%;
`;

Section.defaultProps = {
  size: 'small'
}

export const SectionCentered = styled.section`
  padding: 1em;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
