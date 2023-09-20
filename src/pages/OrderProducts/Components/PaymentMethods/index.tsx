import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useContext } from 'react'
import { useTheme } from 'styled-components'

import { PaymentButton } from './components/PaymentButton'

import {
  OrderComponentsContainer,
  OrderComponentsHeader,
  OrderComponentsTitle,
} from '../../styles'

import { PaymentButtonContainer } from './styles'
import { PaymentMethodType } from '../../../../@types/types'
import { ShoppingContext } from '../../../../context/ShoppingContext'

export const PaymentMethods = () => {
  const theme = useTheme()
  const { setSelectedPayment, selectedPayment } = useContext(ShoppingContext)

  const handlePaymentClick = (paymentMethod: PaymentMethodType) => {
    setSelectedPayment(paymentMethod)
  }

  return (
    <OrderComponentsContainer>
      <OrderComponentsHeader $colorsvg={theme.product.purple}>
        <CurrencyDollar size={22} />

        <OrderComponentsTitle>
          <h3>Formas de pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </OrderComponentsTitle>
      </OrderComponentsHeader>

      <PaymentButtonContainer>
        <PaymentButton
          onClick={() => handlePaymentClick('Cartão de Crédito')}
          $isSelected={selectedPayment === 'Cartão de Crédito'}
        >
          <CreditCard size={16} />
          Cartão de Crédito
        </PaymentButton>
        <PaymentButton
          onClick={() => handlePaymentClick('Cartão de Débito')}
          $isSelected={selectedPayment === 'Cartão de Débito'}
        >
          <Bank size={16} />
          Cartão de Débito
        </PaymentButton>
        <PaymentButton
          onClick={() => handlePaymentClick('Dinheiro')}
          $isSelected={selectedPayment === 'Dinheiro'}
        >
          <Money size={16} />
          Dinheiro
        </PaymentButton>
      </PaymentButtonContainer>
    </OrderComponentsContainer>
  )
}
