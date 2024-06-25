import styled from 'styled-components'

export const DETAILS_COLORS = {
  orange: 'yellow-dark',
  yellow: 'yellow-medium',
  gray: 'base-text',
  purple: 'purple-medium',
} as const

export interface DetailProps {
  detailColor: keyof typeof DETAILS_COLORS
}

export const iconDetailContainer = styled.span<DetailProps>`
  flex-shrink: 0;
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.theme[DETAILS_COLORS[props.detailColor]]};

  color: ${(props) => props.theme['white-100']};

  display: flex;
  align-items: center;
  justify-content: center;
`
