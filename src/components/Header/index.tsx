import { MapPin, ShoppingCart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

import {
  HeaderContainer,
  UserActions,
  UserLocation,
  CartButton,
  CartAmount,
} from './styles'
import logo from '../../assets/logo.svg'
import { useContext } from 'react'
import { ShoppingContext } from '../../context/ShoppingContext'

export const Header = () => {
  const navigate = useNavigate()

  const { productsCart } = useContext(ShoppingContext)

  const cartCount = productsCart.length

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
          {cartCount > 0 && <CartAmount>{cartCount}</CartAmount>}
        </CartButton>
      </UserActions>
    </HeaderContainer>
  )
}
