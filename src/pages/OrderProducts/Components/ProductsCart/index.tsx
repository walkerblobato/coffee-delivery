import { CartItem } from './components/CartItem'
import {
  ProductsCartContainer,
  OrderDetail,
  TotalOrder,
  ConfirmButton,
} from './styles'

export const ProductsCart = () => {
  return (
    <ProductsCartContainer>
      <CartItem />
      <CartItem />
      <CartItem />

      <OrderDetail>
        <p>Total de itens</p>
        <span>R$ 29,70</span>
      </OrderDetail>

      <OrderDetail>
        <p>Entrega</p>
        <span>R$ 3,70</span>
      </OrderDetail>

      <TotalOrder>
        <h4>TotalEntrega</h4>
        <p>R$ 33,40</p>
      </TotalOrder>

      <ConfirmButton>Confirmar Pedido</ConfirmButton>
    </ProductsCartContainer>
  )
}
