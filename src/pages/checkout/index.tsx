import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import {
  AddresFormInputsContainer,
  AddressForm,
  AddressHeading,
  CheckoutContainer,
  PaymentHeading,
  BaseFormContainer,
  AddressPaymentSection,
  PaymentRadiosContainer,
  OrderPreviewContainer,
  ValuesContainer,
  ValueRowLg,
  ValueRowSml,
  ButtonOrderSubmit,
  OrderPreviewSection,
} from './styles'

import { TextInput } from './components/TextInput'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { RadioInput } from './components/RadioInput'
import { CardOrder } from './components/CardOrder'
import { coffeesList } from '../../data'

export function Checkout() {
  const totalItems = (coffeesList[0].price * 2).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const entrega = (3.5).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const totalValue = (coffeesList[0].price * 2 + 3.5).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <CheckoutContainer>
      <AddressPaymentSection>
        <h2>Complete seu pedido</h2>
        <BaseFormContainer>
          <AddressHeading>
            <MapPin size={22} />
            <div>
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </AddressHeading>

          <AddressForm>
            <div data-small>
              <TextInput placeholder="CEP" />
            </div>
            <div data-large>
              <TextInput placeholder="Rua" />
            </div>

            <AddresFormInputsContainer>
              <div data-small>
                <TextInput placeholder="Número" />
              </div>
              <div data-adptative>
                <TextInput placeholder="Complemento" />
              </div>
            </AddresFormInputsContainer>

            <AddresFormInputsContainer>
              <div data-small>
                <TextInput placeholder="Bairro" />
              </div>
              <div data-adptative>
                <TextInput placeholder="Cidade" />
              </div>
              <div data-smaller>
                <TextInput placeholder="UF" />
              </div>
            </AddresFormInputsContainer>
          </AddressForm>
        </BaseFormContainer>

        <BaseFormContainer>
          <PaymentHeading>
            <CurrencyDollar size={22} />
            <div>
              <h2>Pagamento</h2>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </PaymentHeading>

          <PaymentRadiosContainer>
            <RadioInput value="credit-card" isSelected>
              <CreditCard size={16} />
              <span>CARTÃO DE CRÉDITO</span>
            </RadioInput>

            <RadioInput value="credit-card">
              <Bank size={16} />
              <span>CARTÃO DE DÉBITO</span>
            </RadioInput>

            <RadioInput value="credit-card">
              <Money size={16} />
              <span>DINHEIRO</span>
            </RadioInput>
          </PaymentRadiosContainer>
        </BaseFormContainer>
      </AddressPaymentSection>

      <OrderPreviewSection>
        <h2>Cafés selecionados</h2>
        <OrderPreviewContainer>
          <CardOrder coffee={coffeesList[0]} />
          <CardOrder coffee={coffeesList[1]} />
          <CardOrder coffee={coffeesList[2]} />
          <CardOrder coffee={coffeesList[3]} />
          <ValuesContainer>
            <ValueRowSml>
              <span>Total de itens</span>
              <span>{totalItems}</span>
            </ValueRowSml>
            <ValueRowSml>
              <span>Entrega</span>
              <span>{entrega}</span>
            </ValueRowSml>
            <ValueRowLg>
              <span>Total</span>
              <span>{totalValue}</span>
            </ValueRowLg>
          </ValuesContainer>
          <ButtonOrderSubmit>CONFIRMAR PEDIDO</ButtonOrderSubmit>
        </OrderPreviewContainer>
      </OrderPreviewSection>
    </CheckoutContainer>
  )
}
