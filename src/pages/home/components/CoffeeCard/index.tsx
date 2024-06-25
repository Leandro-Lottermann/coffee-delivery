import {
  CardCountContainer,
  CardPriceContainer,
  CardActionsContainer,
  CoffeeCardContainer,
  CoffeeCardFooter,
  CoffeeCardTagsContainer,
} from './styles'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { CoffeeType } from '../../../../@types/Coffee.interface'
import { QuantityInput } from '../../../../components/QuantityInput'

interface CoffeeCardProps {
  Coffee: CoffeeType
}

export function CoffeeCard({ Coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)
  const priceFormated = Coffee.price
    .toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
    .slice(3)

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }
  return (
    <CoffeeCardContainer>
      <img src={Coffee.image} alt="" />

      <CoffeeCardTagsContainer>
        {Coffee.tags.map((tag, index) => (
          <span key={index}>{tag.toUpperCase()}</span>
        ))}
      </CoffeeCardTagsContainer>

      <h1>{Coffee.name}</h1>
      <p>{Coffee.description}</p>

      <CoffeeCardFooter>
        <CardPriceContainer>
          <span>R$ </span>
          <span>{priceFormated}</span>
        </CardPriceContainer>

        <CardActionsContainer>
          <QuantityInput
            quantity={quantity}
            handleDecrementQuantity={decrementQuantity}
            handleIncrementQuantity={incrementQuantity}
          />

          <button type="button">
            <ShoppingCart weight="fill" size={24} />
          </button>
        </CardActionsContainer>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}
