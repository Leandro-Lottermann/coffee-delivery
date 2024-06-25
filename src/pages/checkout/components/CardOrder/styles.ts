import styled from 'styled-components'

export const CardOrderContainer = styled.div`
  width: 100%;
  padding: 32px 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  
  > img {
    width: 64px;
  }

  h1 {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: normal;
  }

  > span {
    color: ${(props) => props.theme['base-text']};
    font-weight: bold;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  > span {
    align-self: flex-start;
  }
`

export const CardOrderActions = styled.div`
  display: flex;
  gap: 8px;
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px;

  border-radius: 6px;
  font-size: 0.75rem;

  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  line-height: 1;

  transition: all 0.3s;
  > svg {
    color: ${(props) => props.theme['purple-medium']};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};

    > svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
