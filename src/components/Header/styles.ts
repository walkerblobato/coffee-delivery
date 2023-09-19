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
    cursor: pointer;
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
  gap: 0.4rem;
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  gap: 0.4rem;
  font-size: 1.4rem;
  border: none;
  cursor: pointer;
  background: ${(props) => props.theme.product['yellow-light']};
  color: ${(props) => props.theme.product['yellow-dark']};
  border-radius: 0.6rem;
  transition: all ease-in-out 600ms;

  &:hover {
    background: ${(props) => props.theme.product.yellow};
    color: ${(props) => props.theme.product['yellow-light']};
  }
`

export const CartAmount = styled.span`
  position: absolute;
  right: -0.8rem;
  top: -0.8rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  padding: 1.1rem;
  border-radius: 50%;
  font-size: 1.2rem;
  color: ${(props) => props.theme.base.white};
  background-color: ${(props) => props.theme.product['yellow-dark']};
`
