import styled from 'styled-components'

export const OrderContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3.2rem;
  padding: 1rem;

  @media (max-width: 1050px) {
    flex-direction: column-reverse;
  }
`

export const OderUserData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const Subtitle = styled.h2`
  font-family: 'Baloo 2', cursive;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`
