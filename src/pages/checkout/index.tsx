import { MapPin } from 'phosphor-react'
import {
  AddressContainer,
  AddressForm,
  AddressHeading,
  CheckoutContainer,
  FormContainer,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <AddressContainer>
        <AddressHeading>
          <MapPin size={22} />
          <div>
            <h2>Endereço de Entrega</h2>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </AddressHeading>

        <AddressForm>
          
        </AddressForm>
      </AddressContainer>
    </CheckoutContainer>
  )
}
