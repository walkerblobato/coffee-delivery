import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.2rem 16rem;

  img {
    width: 8.5rem;
    height: 4rem;
  }

  @media (max-width: 76rem) {
    padding: 3.2rem 3rem;
  }
`

export const UserActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`

export const UserLocation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;

  padding: 0.8rem;
  font-size: 1.4rem;
  border-radius: 0.6rem;

  cursor: pointer;

  background: ${(props) => props.theme.product['purple-light']};
  color: ${(props) => props.theme.product['purple-dark']};

  &:hover {
    background: ${(props) => props.theme.product.purple};
    color: ${(props) => props.theme.product['purple-light']};

    transition: all ease-in-out 600ms;
  }
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;

  padding: 0.8rem;
  border-radius: 0.6rem;
  border: none;

  cursor: pointer;

  background: ${(props) => props.theme.product['yellow-light']};
  color: ${(props) => props.theme.product['yellow-dark']};

  &:hover {
    background: ${(props) => props.theme.product.yellow};
    color: ${(props) => props.theme.product['yellow-light']};

    transition: all ease-in-out 600ms;
  }
`
