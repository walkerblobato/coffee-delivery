import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'

import {
  CartItemContainer,
  ItemContainer,
  ItemOptions,
  ItemQuantity,
  QuantityButton,
  TrashButton,
  Price,
  Divider,
} from './styles'
import { formatPrice } from '../../../../../../utils/formatPrice'
import { ShoppingContext } from '../../../../../../context/ShoppingContext'

export interface ICartItemProps {
  id: number
  iconSrc: string
  name: string
  price: number
  cartQnty: number
}

export const CartItem = (props: ICartItemProps) => {
  const { id, name, iconSrc, price, cartQnty } = props

  const { removeProductCart, updateQuantity } = useContext(ShoppingContext)

  const moreProduct = () => {
    const newQnty = cartQnty + 1

    updateQuantity(id, newQnty)
  }

  const lessProduct = () => {
    if (cartQnty > 1) {
      const newQnty = cartQnty - 1

      updateQuantity(id, newQnty)
    }
  }

  const deleteProduct = () => {
    removeProductCart(id)
  }

  const multiplyPrice = price * cartQnty

  const priceFormat = formatPrice(multiplyPrice)

  return (
    <>
      <CartItemContainer>
        <ItemContainer>
          <img src={iconSrc} alt="Café Expresso" />
          <div>
            <p>{name}</p>
            <ItemOptions>
              <ItemQuantity>
                <QuantityButton onClick={lessProduct}>
                  <Minus size={14} />
                </QuantityButton>
                <span>{cartQnty}</span>
                <QuantityButton onClick={moreProduct}>
                  <Plus size={14} />
                </QuantityButton>
              </ItemQuantity>
              <TrashButton onClick={deleteProduct}>
                <Trash size={16} />
                Remover
              </TrashButton>
            </ItemOptions>
          </div>
        </ItemContainer>

        <Price>R$ {priceFormat}</Price>
      </CartItemContainer>

      <Divider></Divider>
    </>
  )
}
