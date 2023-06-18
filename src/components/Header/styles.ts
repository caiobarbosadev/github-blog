import styled from 'styled-components'
import backgroundImage from '../../assets/cover.svg'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;

  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
`

export const InsideHeaderContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;

  display: flex;
  justify-content: center;

  img {
    max-width: 9.25rem;
    margin-top: 4rem;
  }
`
