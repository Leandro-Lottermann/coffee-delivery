import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 110px 24px 20px;
  width: 256px;
  height: 310px;
  position: relative;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
  }

  img {
    position: absolute;
    top: -20px;
    width: 120px;
  }
`

export const CoffeeCardTagsContainer = styled.div`
  display: flex;
  gap: 4px;
  span {
    padding: 4px 8px;
    border-radius: 100px;
    font-size: 0.625rem;
    font-weight: bold;
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
  }
`

export const CoffeeCardFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const CardPriceContainer = styled.div`
  span:first-child {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }

  span:last-child {
    font-size: 1rem;
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: bolder;
    color: ${(props) => props.theme['base-text']};
  }
`

export const CardActionsContainer = styled.div`
  display: flex;
  gap: 8px;
  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 6px;
    background-color: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['base-card']};
  }
`

export const CardCountContainer = styled.div`
  display: flex;
  padding: 12px 8px;
  gap: 4px;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  button {
    color: ${(props) => props.theme['purple-medium']};
  }

  input {
    width: 20px;
    text-align: center;
  }
`
