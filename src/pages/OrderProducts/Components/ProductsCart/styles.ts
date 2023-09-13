import styled from 'styled-components'

export const ProductsCartContainer = styled.div`
  background-color: ${(props) => props.theme.base['base-card']};
  padding: 4rem;
  border-radius: 0.6rem 4.4rem;
  width: 48.8rem;

  @media (max-width: 1050px) {
    border-radius: 0.6rem;
    width: 64rem;
  }

  @media (max-width: 696px) {
    width: 95vw;
  }

  @media (max-width: 570px) {
    padding: 2rem;
  }
`

export const OrderDetail = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.base['base-text']};
  margin-bottom: 1.5rem;
  line-height: 130%;

  p {
    font-size: 1.4rem;
  }
`

export const TotalOrder = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  line-height: 130%;
  font-size: 2rem;
  margin-bottom: 2.4rem;
  color: ${(props) => props.theme.base['base-subtitle']};
`
export const ConfirmButton = styled.button`
  background-color: ${(props) => props.theme.product.yellow};
  color: ${(props) => props.theme.base.white};
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;
  width: 100%;
  align-self: stretch;
  padding: 1.2rem 0.8rem;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
  transition: ease-out 600ms;

  &:hover {
    background-color: ${(props) => props.theme.product['yellow-dark']};
    transition: ease-in 200ms;
  }
`
