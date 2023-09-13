import { DeliveryAddress } from './Components/DeliveryAddress'
import { PaymentMethods } from './Components/PaymentMethods'
import { ProductsCart } from './Components/ProductsCart'

import { OrderContainer, OderUserData, Subtitle } from './styles'

export const OrderProducts = () => {
  return (
    <OrderContainer>
      <OderUserData>
        <Subtitle>Complete seu pedido</Subtitle>
        <DeliveryAddress />
        <PaymentMethods />
      </OderUserData>

      <OderUserData>
        <Subtitle>Cafés selecionados</Subtitle>
        <ProductsCart />
      </OderUserData>
    </OrderContainer>
  )
}
