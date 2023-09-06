import { MapPin, ShoppingCart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

import {
  HeaderContainer,
  UserActions,
  UserLocation,
  CartButton,
} from './styles'
import logo from '../../assets/logo.svg'

export const Header = () => {
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <img
        src={logo}
        alt="logo coffee delivery"
        onClick={() => navigate('/')}
      />
      <UserActions>
        <UserLocation>
          <MapPin weight="fill" size={22} />
          <span>Carangola, MG</span>
        </UserLocation>
        <CartButton>
          <ShoppingCart
            weight="fill"
            size={22}
            onClick={() => navigate('/order-products')}
          />
        </CartButton>
      </UserActions>
    </HeaderContainer>
  )
}
