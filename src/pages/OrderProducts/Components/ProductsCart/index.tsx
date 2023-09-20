import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

import { CartItem } from './components/CartItem'

import {
  ProductsCartContainer,
  OrderDetail,
  TotalOrder,
  ConfirmButton,
  EmptyCart,
} from './styles'
import { ShoppingContext } from '../../../../context/ShoppingContext'
import { formatPrice } from '../../../../utils/formatPrice'

export const ProductsCart = () => {
  const { productsCart, totalItems, calculateTotalItems } =
    useContext(ShoppingContext)
  const navigate = useNavigate()

  calculateTotalItems()

  const formatTotalItems = formatPrice(totalItems)
  const deliveryTax = totalItems * 0.15 + 2.7
  const formatDeliveryTax = formatPrice(deliveryTax)
  const totalPrice = formatPrice(totalItems + deliveryTax)
  const isEmpty = productsCart.length === 0

  return (
    <ProductsCartContainer>
      {isEmpty ? (
        <EmptyCart>
          Seu carrinho está vazio,{' '}
          <a onClick={() => navigate('/')}> adicione um café!</a>
        </EmptyCart>
      ) : (
        <>
          {productsCart.map((product) => (
            <CartItem
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              iconSrc={product.iconSrc}
              cartQnty={product.cartQnty}
            />
          ))}

          <OrderDetail>
            <p>Total de itens</p>
            <span>R$ {formatTotalItems}</span>
          </OrderDetail>

          <OrderDetail>
            <p>Entrega</p>
            <span>R$ {formatDeliveryTax}</span>
          </OrderDetail>

          <TotalOrder>
            <h4>Total</h4>
            <p>R$ {totalPrice}</p>
          </TotalOrder>
        </>
      )}

      <ConfirmButton
        onClick={() => navigate('/order-success')}
        disabled={isEmpty}
        title="Corfirmar pedido"
      >
        Confirmar Pedido
      </ConfirmButton>
    </ProductsCartContainer>
  )
}
