import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.2rem 0;
  margin-bottom: 4rem;
  width: 100%;

  img {
    width: 8.5rem;
    height: 4rem;
  }
`

export const UserActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
`

export const UserLocation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  font-size: 1.4rem;
  background: ${(props) => props.theme.product['purple-light']};
  color: ${(props) => props.theme.product['purple-dark']};
  border-radius: 0.6rem;
  transition: all ease-in-out 600ms;

  &:hover {
    background: ${(props) => props.theme.product['purple-dark']};
    color: ${(props) => props.theme.product['purple-light']};
  }
`

export const CartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  gap: 0.4rem;
  font-size: 1.4rem;
  border: none;
  background: ${(props) => props.theme.product['yellow-light']};
  color: ${(props) => props.theme.product['yellow-dark']};
  border-radius: 0.6rem;
  transition: all ease-in-out 600ms;

  &:hover {
    background: ${(props) => props.theme.product.yellow};
    color: ${(props) => props.theme.product['yellow-light']};
  }
`
