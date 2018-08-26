import styled from 'styled-components'
import { widths, device } from '../../styles/constants';

export const Panes = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }
` 
export const Pane = styled.div`
  flex: 1 0 100%;
  display: flex;
  & > div {
    flex: 1 0 auto;
  }
  @media ${device.tablet} {
    flex: 1 1 50%;
  }
` 
