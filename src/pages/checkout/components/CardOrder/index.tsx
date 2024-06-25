import { useState } from 'react'
import { CoffeeType } from '../../../../@types/Coffee.interface'
import { QuantityInput } from '../../../../components/QuantityInput'
import { CardOrderActions, CardOrderContainer, RemoveButton } from './styles'

import { Trash } from 'phosphor-react'

interface CardOrderProps {
  coffee: CoffeeType
}
export function CardOrder({ coffee }: CardOrderProps) {
  const [quantity, setQuantity] = useState(
    coffee.quantity ? coffee.quantity : 1,
  )

  const priceFormated = coffee.price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }
  return (
    <CardOrderContainer>
      <img src={coffee.image} alt="" />
      <div>
        <h1>{coffee.name}</h1>
        <CardOrderActions>
          <QuantityInput
            quantity={quantity}
            handleDecrementQuantity={decrementQuantity}
            handleIncrementQuantity={incrementQuantity}
          />
          <RemoveButton type="button">
            <Trash size={16} />
            REMOVER
          </RemoveButton>
        </CardOrderActions>
      </div>
      <span>{priceFormated}</span>
    </CardOrderContainer>
  )
}
