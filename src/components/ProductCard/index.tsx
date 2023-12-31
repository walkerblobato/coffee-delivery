import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'

import { ShoppingContext } from '../../context/ShoppingContext'
import { formatPrice } from '../../utils/formatPrice'

import {
  CoffeeCard,
  CoffeeInfo,
  OptionsStyle,
  BuyActions,
  BuyQuantity,
  BuyButton,
  QuantityButton,
} from './styles'

export interface IProductCardProps {
  data: {
    id: number
    name: string
    description: string
    options: string[]
    iconSrc: string
    imgSrc?: string
    price: number
  }
}

export const ProductCard = (props: IProductCardProps) => {
  const [qntyProductCard, setQntyProductCard] = useState(1)

  const { id, iconSrc, name, options, description, price } = props.data
  const { setProductsToCart, updateQuantity } = useContext(ShoppingContext)

  const products = {
    id,
    iconSrc,
    name,
    options,
    price,
    qnty: qntyProductCard,
    cartQnty: qntyProductCard,
  }

  const getDataProduct = () => {
    setProductsToCart(products)
  }

  const lessProducts = () => {
    const newQnty = qntyProductCard - 1

    setQntyProductCard(newQnty)
    updateQuantity(id, newQnty)
  }

  const moreProducts = () => {
    const newQnty = qntyProductCard + 1

    setQntyProductCard(newQnty)
    updateQuantity(id, newQnty)
  }

  const priceFormat = formatPrice(price)

  return (
    <CoffeeCard>
      <img src={`${iconSrc}`} alt={name}></img>

      <CoffeeInfo>
        <OptionsStyle>
          {options.map((option) => (
            <button key={option}>{option}</button>
          ))}
        </OptionsStyle>

        <h3>{name}</h3>
        <h4>{description}</h4>
      </CoffeeInfo>

      <BuyActions>
        <p title="Preço atual">
          R$ <span>{priceFormat}</span>
        </p>

        <BuyQuantity>
          <QuantityButton title="Remover" onClick={lessProducts}>
            <Minus size={14} />
          </QuantityButton>
          <span title="Unidades">{qntyProductCard}</span>
          <QuantityButton title="Adicionar" onClick={moreProducts}>
            <Plus size={14} />
          </QuantityButton>
        </BuyQuantity>

        <BuyButton title="Comprar" onClick={getDataProduct}>
          <ShoppingCart size={22} weight="fill" />
        </BuyButton>
      </BuyActions>
    </CoffeeCard>
  )
}
