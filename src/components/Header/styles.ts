import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 33px 160px;
`

export const HeaderCheckoutContainer = styled.div`
  display: flex;
  gap: 12px;
`

export const LocationLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;

  padding: 8px;

  background: ${(props) => props.theme['purple-light']};

  text-decoration: none;
  font-size: 0.875rem;

  border-radius: 6px;
  color: ${(props) => props.theme['purple-dark']};

  svg {
    color: ${(props) => props.theme['purple-medium']};
  }
`

export const CartLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 6px;
  background: ${(props) => props.theme['yellow-light']};
  text-decoration: none;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background: ${(props) => props.theme['yellow-dark']};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    font-weight: 600;
    font: 0.75rem;
    color: ${(props) => props.theme['white-100']};
    position: absolute;
    top: -10px;
    right: -10px;
  }
`
