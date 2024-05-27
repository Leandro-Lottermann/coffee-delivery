import styled from 'styled-components'

export const RadioContainer = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 12px;
  border-radius: 6px;

  background: ${(props) => props.theme['base-button']};

  > input[type='radio'] {
    display: none;
  }

  svg {
    color: ${(props) => props.theme['purple-medium']};
  }

  > span {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.75rem;
  }
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: ${(props) => props.theme['base-hover']};

    span {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  &[data-state='true'] {
    background-color: ${(props) => props.theme['purple-light']};
    border-color: ${(props) => props.theme['purple-medium']};
    border: 1px solid ${(props) => props.theme['purple-medium']};
  }
`
