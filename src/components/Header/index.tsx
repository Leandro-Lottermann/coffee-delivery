import { Link } from 'react-router-dom'
import {
  CartLink,
  HeaderCheckoutContainer,
  HeaderContainer,
  LocationLink,
} from './styles'
import logoCoffee from '../../assets/logo-coffee-delivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoCoffee} alt="" />
      </Link>
      <HeaderCheckoutContainer>
        <LocationLink to="#">
          <MapPin size={22} weight="fill"></MapPin>
          Porto Alegre, RS
        </LocationLink>
        <CartLink to="/checkout">
          <ShoppingCart size={22} weight="fill" />
          <span>3</span>
        </CartLink>
      </HeaderCheckoutContainer>
    </HeaderContainer>
  )
}
