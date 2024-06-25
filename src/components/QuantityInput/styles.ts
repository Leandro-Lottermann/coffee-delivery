import styled from 'styled-components'

export const QuantityInputContainer = styled.div`
  display: flex;
  padding: 0 8px;
  gap: 4px;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  > button {
    color: ${(props) => props.theme['purple-medium']};

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  input {
    width: 20px;
    text-align: center;
  }
`
