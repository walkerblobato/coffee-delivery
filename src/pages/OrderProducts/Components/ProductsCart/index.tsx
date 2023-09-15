import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

import { CartItem } from './components/CartItem'

import {
  ProductsCartContainer,
  OrderDetail,
  TotalOrder,
  ConfirmButton,
} from './styles'
import { ShoppingContext } from '../../../../context/ShoppingContext'

export const ProductsCart = () => {
  const { productsCart } = useContext(ShoppingContext)
  const navigate = useNavigate()

  return (
    <ProductsCartContainer>
      {productsCart.map((product) => (
        <CartItem
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          options={product.options}
          iconSrc={product.iconSrc}
          qnty={product.qnty}
        />
      ))}

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
