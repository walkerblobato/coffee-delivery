import styled from 'styled-components'

export const CoffeeCard = styled.div`
  background: ${(props) => props.theme.base['base-card']};
  border-radius: 6px 36px 6px 36px;
  max-width: 25.6rem;
  height: 31rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 2.4rem;

  h3 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    color: ${(props) => props.theme.base['base-subtitle']};
    margin: 0.8rem 0;
  }

  h4 {
    font-family: 'Roboto';
    font-size: 1.4rem;
    margin: 0.8rem 0;
    color: ${(props) => props.theme.base['base-label']};
  }

  img {
    margin-top: -4rem;
  }

  @media (max-width: 1280px) {
    max-width: 25vw;
  }

  @media (max-width: 950px) {
    max-width: 38vw;
  }

  @media (max-width: 630px) {
    min-width: 85vw;
  }
`
export const CoffeeInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`
export const OptionsStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  width: 100%;

  button {
    font-size: 1rem;
    background: ${(props) => props.theme.product['yellow-light']};
    color: ${(props) => props.theme.product['yellow-dark']};
    border: none;
    padding: 0.4rem 0.8rem;
    border-radius: 100px;
    font-weight: 700;
    text-transform: uppercase;
  }
`
export const BuyQuantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  border-radius: 6px;
  min-width: 7.2rem;
  height: 3.8rem;
  font-family: Roboto;
  font-size: 1.6rem;
  background: ${(props) => props.theme.base['base-button']};

  span {
    padding: 0.2rem;
    font-size: 1.6rem;
  }

  button {
    border: none;
    transition: all ease-in-out 600ms;
    border-radius: 50%;
    padding: 0.2rem;
    display: flex;
    background: ${(props) => props.theme.base['base-button']};
  }

  button:hover {
    transition: all ease-in-out 600ms;
    background: ${(props) => props.theme.base['base-label']};
    border: 0.2rem solid ${(props) => props.theme.base.white};
    svg {
      filter: invert();
    }
  }

  @media (max-width: 591px) {
    max-width: 10.2rem;
    flex-grow: 1;
  }
`
export const BuyActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  h6 {
    font-family: 'Roboto';
    font-size: 1.4rem;
    color: ${(props) => props.theme.base['base-text']};
    span {
      font-family: 'baloo 2';
      font-size: 2.4rem;
      font-weight: 800;
    }
  }

  button:hover {
    transition: all ease-in-out 600ms;
    background: ${(props) => props.theme.base['base-label']};
    svg {
      filter: invert();
    }
  }
`

interface IconButton {
  background: string
}

export const BuyButton = styled.div<IconButton>`
  button {
    background: ${(props) => props.background};
    border-radius: 6px;
    padding: 0.8rem;
    border: none;
    width: 3.8rem;
    height: 3.8rem;
    svg {
      color: ${(props) => props.theme.base.white};
      margin: auto;
    }
  }
`
