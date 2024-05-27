import { FieldError } from 'react-hook-form'
import { TextInputContainer } from './styles'
import { InputHTMLAttributes, useState } from 'react'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean
  error?: FieldError
}

export function TextInput({ ...rest }: TextInputProps) {
  const [active, setActive] = useState(false)

  function handleFocus() {
    setActive(true)
  }

  function handleBlur() {
    setActive(false)
  }

  return (
    <TextInputContainer active={active ? 1 : 0}>
      <input type="text" {...rest} onFocus={handleFocus} onBlur={handleBlur} />
    </TextInputContainer>
  )
}
