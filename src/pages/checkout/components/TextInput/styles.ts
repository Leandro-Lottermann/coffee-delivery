import styled from 'styled-components'
interface TextInputProps {
  active: number
}
export const TextInputContainer = styled.label<TextInputProps>`
  display: flex;

  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 6px;

  transition: all 0.3s;

  input {
    padding: 12px;
    outline: none;
    background-color: transparent;
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
    width: 100%;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }

  ${(props) => {
    if (props.active !== 0) {
      return `
            border-color: ${props.theme['yellow-dark']}
        `
    }
  }}
`
