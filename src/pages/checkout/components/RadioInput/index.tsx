import { RadioContainer } from './styles'

interface RadioInputProps {
  value: string
  children: React.ReactNode
  isSelected?: boolean
}

export function RadioInput({ children, value, isSelected }: RadioInputProps) {
  return (
    <RadioContainer data-state={isSelected}>
      {children}
      <input type="radio" value={value} />
    </RadioContainer>
  )
}
