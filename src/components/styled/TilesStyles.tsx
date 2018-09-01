import styled from 'styled-components'

export const Tiles = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

export const Tile = styled.div`
  display: flex;
  & > div {
    flex: 1 0 auto;
  }
`
