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
