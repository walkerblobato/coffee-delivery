import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

import { useTheme } from 'styled-components'

import { PaymentButton, PaymentButtonContainer } from './styles'

import {
  OrderComponentsContainer,
  OrderComponentsHeader,
  OrderComponentsTitle,
} from '../../styles'

export const PaymentMethods = () => {
  const theme = useTheme()

  return (
    <OrderComponentsContainer>
      <OrderComponentsHeader colorSvg={theme.product['purple-dark']}>
        <CurrencyDollar size={22} />

        <OrderComponentsTitle>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </OrderComponentsTitle>
      </OrderComponentsHeader>

      <PaymentButtonContainer>
        <PaymentButton>
          <CreditCard size={16} />
          Cartão de Crédito
        </PaymentButton>
        <PaymentButton>
          <Bank size={16} />
          Cartão de Débito
        </PaymentButton>
        <PaymentButton>
          <Money size={16} />
          Dinheiro
        </PaymentButton>
      </PaymentButtonContainer>
    </OrderComponentsContainer>
  )
}
