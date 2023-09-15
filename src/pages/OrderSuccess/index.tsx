import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { useTheme } from 'styled-components'

import illustration from '../../assets/Illustration.png'

import {
  OrderSuccessData,
  OrderSuccessInfo,
  SuccessContainer,
  SuccessHeader,
  SuccessIllustration,
  SuccessPage,
} from './styles'

export const OrderSuccess = () => {
  const theme = useTheme()

  return (
    <>
      <SuccessPage>
        <SuccessContainer>
          <SuccessHeader>
            <h2>Uhu! Pedido confirmado</h2>
            <p>Agora é só aguardar que logo o café chegará até você</p>
          </SuccessHeader>

          <OrderSuccessInfo>
            <OrderSuccessData $background={theme.product['purple-dark']}>
              <span>
                <MapPin size={16} weight="fill" />
              </span>
              <p>
                Entrega em <b>Rua João Daniel Martinelli, 102</b> Farrapos -
                Porto Alegre, RS
              </p>
            </OrderSuccessData>

            <OrderSuccessData $background={theme.product.yellow}>
              <span>
                <Clock size={16} weight="fill" />
              </span>
              <p>
                Previsão de entrega <br />
                <b>20 min - 30 min</b>
              </p>
            </OrderSuccessData>

            <OrderSuccessData $background={theme.product['yellow-dark']}>
              <span>
                <CurrencyDollar size={16} />
              </span>
              <p>
                Pagamento na entrega <br />
                <b>Cartão de Crédito</b>
              </p>
            </OrderSuccessData>
          </OrderSuccessInfo>
        </SuccessContainer>
        <SuccessIllustration src={illustration} alt="Algo" />
      </SuccessPage>
    </>
  )
}
