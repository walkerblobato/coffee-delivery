import styled from 'styled-components'

export const PaymentButtonContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  @media (max-width: 660px) {
    flex-direction: column;
    align-items: start;
  }
`

export const PaymentButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.6rem;
  width: 33%;
  border-radius: 0.6rem;
  background-color: ${(props) => props.theme.base['base-button']};
  color: ${(props) => props.theme.base['base-text']};
  border: none;
  font-size: 1.2rem;
  text-transform: uppercase;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.product['purple-dark']};
  }

  @media (max-width: 660px) {
    width: 50%;
    justify-content: space-between;
    flex-direction: row-reverse;
  }

  @media (max-width: 420px) {
    width: 80%;
  }
`
