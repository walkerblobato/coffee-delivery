import styled from 'styled-components'

import { PaymentButtonProps } from '../../../../../../@types/interfaces'

export const StyledPaymentButton = styled.div<PaymentButtonProps>`
  border: 2px solid
    ${({ $isSelected }) =>
      $isSelected ? (props) => props.theme.product.purple : 'transparent'};
  display: flex;
  padding: 1.6rem;
  align-items: center;
  gap: 1.2rem;
  background: ${({ $isSelected }) =>
    $isSelected
      ? (props) => props.theme.base['base-button']
      : (props) => props.theme.product['purple-light']};
  color: ${(props) => props.theme.base['base-text']};
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;
  border-radius: 6px;
  transition: all ease-in-out 400ms;
  cursor: pointer;
  width: 33%;

  svg {
    color: ${(props) => props.theme.product.purple};
  }

  &:hover {
    background: ${(props) => props.theme.base['base-hover']};
  }

  &:checked {
    border: 1px solid ${(props) => props.theme.product.purple};
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
