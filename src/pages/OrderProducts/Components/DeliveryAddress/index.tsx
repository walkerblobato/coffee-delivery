import { MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { AddressInput, AddressInputContainer, InputSection } from './styles'

import {
  OrderComponentsContainer,
  OrderComponentsHeader,
  OrderComponentsTitle,
} from '../../styles'

export const DeliveryAddress = () => {
  const theme = useTheme()

  return (
    <OrderComponentsContainer>
      <OrderComponentsHeader $colorsvg={theme.product['yellow-dark']}>
        <MapPinLine size={22} />

        <OrderComponentsTitle>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </OrderComponentsTitle>
      </OrderComponentsHeader>

      <AddressInputContainer>
        <AddressInput placeholder="CEP" width="38%" />
        <AddressInput placeholder="Rua" />

        <InputSection>
          <AddressInput placeholder="Número" width="38%" />
          <AddressInput placeholder="Complemento" width="100%" />
        </InputSection>

        <InputSection>
          <AddressInput placeholder="Bairro" />

          <div>
            <AddressInput placeholder="Cidade" width="75%" />
            <AddressInput placeholder="UF" width="25%" />
          </div>
        </InputSection>
      </AddressInputContainer>
    </OrderComponentsContainer>
  )
}
