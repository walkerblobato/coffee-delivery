import { MapPinLine } from 'phosphor-react'
import {
  AddressInput,
  AddressInputContainer,
  DeliveryAddressContainer,
  DeliveryHeader,
  DeliveryTitle,
  InputSection,
} from './styles'

export const DeliveryAddress = () => {
  return (
    <DeliveryAddressContainer>
      <DeliveryHeader>
        <MapPinLine size={22} />

        <DeliveryTitle>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </DeliveryTitle>
      </DeliveryHeader>

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
    </DeliveryAddressContainer>
  )
}
