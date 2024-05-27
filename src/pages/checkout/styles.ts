import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: flex;
  max-width: 1120px;
  margin: 0 auto;
`

export const AddressPaymentSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const BaseFormContainer = styled.div`
  padding: 40px;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  width: 640px;
`

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
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  div[data-small] {
    width: 100%;
    max-width: 200px;
    flex-shrink: 0;
  }

  div[data-large] {
    width: 100%;
  }

  div[data-smaller] {
    max-width: 60px;
  }

  div[data-adptative] {
    flex: 1;
  }
`

export const AddresFormInputsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
`

export const PaymentHeading = styled(Heading)`
  > svg {
    color: ${(props) => props.theme['purple-medium']};
  }
`
export const PaymentRadiosContainer = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 12px;
`

export const OrderPreviewContainer = styled.div``
