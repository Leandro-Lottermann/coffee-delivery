import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: flex;
  width: 100%;
  gap: 32px;
  max-width: 1120px;
  margin: 0 auto;
  align-items: flex-start;
  margin-bottom: 40px;
`

export const AddressPaymentSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 640px;
  > h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const BaseFormContainer = styled.div`
  padding: 40px;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  width: 100%;
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

export const OrderPreviewSection = styled.aside`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  > h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const OrderPreviewContainer = styled.div`
  width: 100%;
  border-radius: 6px 44px 6px 44px;
  background: ${(props) => props.theme['base-card']};
  padding: 16px 40px 40px 40px;
`

export const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 24px 0;
  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`

export const ValueRowSml = styled.div`
  > span {
    color: ${(props) => props.theme['base-text']};
  }

  > span:first-child {
    font-size: 0.875rem;
  }

  > span:last-child {
    font-size: 1rem;
  }
`

export const ValueRowLg = styled.div`
  > span {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    font-weight: 600;
  }
`

export const ButtonOrderSubmit = styled.button`
  width: 100%;
  background: ${(props) => props.theme['yellow-medium']};
  color: ${(props) => props.theme['white-100']};

  font-size: 0.875rem;
  font-weight: bold;

  padding: 12px;

  transition: all 0.3s;

  line-height: 1.6;

  border-radius: 6px;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
