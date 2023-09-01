import { MapPin, ShoppingCart } from 'phosphor-react'

import {
  HeaderContainer,
  UserActions,
  UserLocation,
  CartButton,
} from './styles'
import logo from '../../assets/logo.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo coffee delivery" />
      <UserActions>
        <UserLocation>
          <MapPin weight="fill" size={22} />
          <span>Carangola, MG</span>
        </UserLocation>
        <CartButton>
          <ShoppingCart weight="fill" size={22} />
        </CartButton>
      </UserActions>
    </HeaderContainer>
  )
}
