import styled from 'styled-components'

export const DeliveryAddressContainer = styled.div`
  padding: 4rem;
  background-color: ${(props) => props.theme.base['base-card']};
  border-radius: 0.6rem;
  width: 56rem;

  @media (max-width: 696px) {
    width: 95vw;
  }

  @media (max-width: 570px) {
    padding: 2rem;
  }
`

export const DeliveryHeader = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 3.2rem;

  svg {
    color: ${(props) => props.theme.product['yellow-dark']};
  }
`

export const DeliveryTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.6rem;
    color: ${(props) => props.theme.base['base-subtitle']};
    font-weight: 400;
    line-height: 130%;
  }

  p {
    font-size: 1.4rem;
    color: ${(props) => props.theme.base['base-text']};
    font-weight: 400;
    line-height: 130%;
  }
`

export const AddressInputContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  gap: 1.6rem;
`

interface IAddressInputProps {
  width?: string
}

export const AddressInput = styled.input<IAddressInputProps>`
  background-color: ${(props) => props.theme.base['base-input']};
  color: ${(props) => props.theme.base['base-label']};
  font-size: 1.4rem;
  border-radius: 0.4rem;
  border: 1px solid ${(props) => props.theme.base['base-button']};
  padding: 1.2rem;
  width: ${(props) => props.width};
`

export const InputSection = styled.div`
  display: flex;
  gap: 1.2rem;

  div {
    display: flex;
    gap: 1.2rem;
  }

  @media (max-width: 570px) {
    flex-direction: column;
  }
`
