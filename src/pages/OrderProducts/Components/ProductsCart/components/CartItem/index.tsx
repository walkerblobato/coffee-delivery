import { Minus, Plus, Trash } from 'phosphor-react'

import coffeeExpresso from '../../../../../../assets/products_icon/expresso.png'

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

export const CartItem = () => {
  return (
    <>
      <CartItemContainer>
        <ItemContainer>
          <img src={coffeeExpresso} alt="Café Expresso" />
          <div>
            <p>Expresso Tradicional</p>
            <ItemOptions>
              <ItemQuantity>
                <QuantityButton>
                  <Minus size={14} />
                </QuantityButton>
                <span>1</span>
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

        <Price>R$ 9,90</Price>
      </CartItemContainer>

      <Divider></Divider>
    </>
  )
}
