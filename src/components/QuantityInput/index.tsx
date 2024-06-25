import { Minus, Plus } from 'phosphor-react'
import { QuantityInputContainer } from './styles'

interface QuantityInputContainerProps {
  quantity: number
  handleDecrementQuantity: () => void
  handleIncrementQuantity: () => void
}

export function QuantityInput({
  quantity,
  handleDecrementQuantity,
  handleIncrementQuantity,
}: QuantityInputContainerProps) {
  return (
    <QuantityInputContainer>
      <button type="button" onClick={handleDecrementQuantity}>
        <Minus size={14} />
      </button>
      <input type="number" value={quantity} />
      <button type="button" onClick={handleIncrementQuantity}>
        <Plus size={14} />
      </button>
    </QuantityInputContainer>
  )
}
