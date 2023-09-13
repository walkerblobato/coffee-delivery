import { CartItem } from './components/CartItem'
import { useNavigate } from 'react-router-dom'
import {
  ProductsCartContainer,
  OrderDetail,
  TotalOrder,
  ConfirmButton,
} from './styles'

export const ProductsCart = () => {
  const navigate = useNavigate()

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

      <ConfirmButton onClick={() => navigate('/order-success')}>
        Confirmar Pedido
      </ConfirmButton>
    </ProductsCartContainer>
  )
}
