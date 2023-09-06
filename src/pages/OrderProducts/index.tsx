import { DeliveryAddress } from './Components/DeliveryAddress'
import { PaymentMethods } from './Components/PaymentMethods'
import { ProductsCart } from './Components/ProductsCart'

export const OrderProducts = () => {
  return (
    <div>
      <div>
        <DeliveryAddress />
        <PaymentMethods />
      </div>

      <ProductsCart />
    </div>
  )
}
