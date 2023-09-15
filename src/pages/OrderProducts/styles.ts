import styled from 'styled-components'

export const OrderContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3.2rem;
  padding: 1rem;

  @media (max-width: 1050px) {
    flex-direction: column;
  }
`

export const OderUserData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const Subtitle = styled.h2`
  font-family: 'Baloo 2', cursive;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`

export const OrderComponentsContainer = styled.div`
  padding: 4rem;
  background-color: ${(props) => props.theme.base['base-card']};
  border-radius: 0.6rem;
  width: 64rem;

  @media (max-width: 696px) {
    width: 95vw;
  }

  @media (max-width: 570px) {
    padding: 2rem;
  }
`

interface IOrderComponentsHeaderProps {
  $colorsvg: string
}

export const OrderComponentsHeader = styled.div<IOrderComponentsHeaderProps>`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 3.2rem;

  svg {
    color: ${(props) => props.$colorsvg};
  }
`

export const OrderComponentsTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.6rem;
    color: ${(props) => props.theme.base['base-subtitle']};
    font-weight: 400;
    line-height: 130%;
  }

  p {
    font-size: 1.4rem;
    color: ${(props) => props.theme.base['base-text']};
    font-weight: 400;
    line-height: 130%;
  }
`
