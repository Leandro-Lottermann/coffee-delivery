import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
  }
`

export const GradientBorder = styled.div`
  border: 1px solid;
  border-radius: 6px 36px;
  width: 100%;

  border-color: transparent;
  background-origin: border-box;
  background-image: ${(props) =>
    `linear-gradient(to bottom right, ${props.theme['yellow-medium']}, ${props.theme['purple-medium']})`};
`

export const OrderInfoContainer = styled.div`
  padding: 40px;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme['background-primary']};
`
