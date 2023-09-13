import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 6.4rem;
    height: 6.4rem;
  }

  @media (max-width: 399px) {
    img {
      width: 4.5rem;
      height: 4.5rem;
    }
  }
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  p {
    color: ${(props) => props.theme.base['base-subtitle']};
    line-height: 130%;
  }
`

export const ItemOptions = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  margin-top: 0.8rem;
`

export const ItemQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  border-radius: 0.6rem;
  height: 3.2rem;
  padding: 0.8rem;
  background-color: ${(props) => props.theme.base['base-button']};

  span {
    width: 2rem;
    text-align: center;
    color: ${(props) => props.theme.base['base-title']};
  }
`

export const QuantityButton = styled.button`
  color: ${(props) => props.theme.product.purple};
  background-color: ${(props) => props.theme.base['base-button']};
  border: none;
  cursor: pointer;
`

export const TrashButton = styled.button`
  padding: 0.8rem;
  font-size: 12px;
  height: 3.2rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  border: none;
  border-radius: 0.6rem;
  color: ${(props) => props.theme.base['base-text']};
  background-color: ${(props) => props.theme.base['base-button']};

  svg {
    color: ${(props) => props.theme.product.purple};
  }
`

export const Price = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme.base['base-text']};
`
export const Divider = styled.div`
  border: 1px solid ${(props) => props.theme.base['base-button']};
  margin: 2.4rem 0;
`
