import { Minus, Plus, Trash } from 'phosphor-react'

import { IProductsDataCart } from '../../../../../../@types/interfaces'

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

export const CartItem = (props: IProductsDataCart) => {
  const { name, iconSrc, price, qnty } = props
  return (
    <>
      <CartItemContainer>
        <ItemContainer>
          <img src={iconSrc} alt="Café Expresso" />
          <div>
            <p>{name}</p>
            <ItemOptions>
              <ItemQuantity>
                <QuantityButton>
                  <Minus size={14} />
                </QuantityButton>
                <span>{qnty}</span>
                <QuantityButton>
                  <Plus size={14} />
                </QuantityButton>
              </ItemQuantity>
              <TrashButton>
                <Trash size={16} />
                Remover
              </TrashButton>
            </ItemOptions>
          </div>
        </ItemContainer>

        <Price>R$ {price}</Price>
      </CartItemContainer>

      <Divider></Divider>
    </>
  )
}
