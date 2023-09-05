import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useTheme } from 'styled-components'

import {
  CoffeeCard,
  CoffeeInfo,
  OptionsStyle,
  BuyActions,
  BuyQuantity,
  BuyButton,
} from './styles'

export interface IProductCardProps {
  data: {
    name: string
    description: string
    options: string[]
    iconSrc: string
    imgSrc?: string
  }
}

export const ProductCard = (props: IProductCardProps) => {
  const theme = useTheme()
  const { iconSrc, name, options, description } = props.data

  return (
    <CoffeeCard>
      <img src={`${iconSrc}`} alt={name}></img>

      <CoffeeInfo>
        <OptionsStyle>
          {options.map((option, index) => (
            <button key={index}>{option}</button>
          ))}
        </OptionsStyle>

        <h3>{name}</h3>
        <h4>{description}</h4>
      </CoffeeInfo>

      <BuyActions>
        <h6 title="Preço atual">
          R$ <span>9,90</span>
        </h6>

        <BuyQuantity>
          <button title="Remover">
            <Minus size={14} />
          </button>
          <span title="Unidades">1</span>
          <button title="Adicionar">
            <Plus size={14} />
          </button>
        </BuyQuantity>

        <BuyButton title="Comprar" background={theme.product['purple-dark']}>
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </BuyButton>
      </BuyActions>
    </CoffeeCard>
  )
}
