import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: flex;
  max-width: 1120px;
  margin: 0 auto;
`

export const AddressContainer = styled.div``

const Heading = styled.div`
  display: flex;
  gap: 8px;

  div {
    h2 {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1rem;
      font-weight: normal;
    }

    p {
      color: ${(props) => props.theme['base-text']};
      font-size: 0.875rem;
      font-weight: normal;
    }
  }
`

export const AddressHeading = styled(Heading)`
  > svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const AddressForm = styled.div`

`

export const TextInput

export const OrderPreviewContainer = styled.div``
