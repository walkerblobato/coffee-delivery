import { styled } from 'styled-components'

export const SuccessPage = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 3.2rem;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 950px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;

  @media (max-width: 950px) {
    margin-bottom: 4rem;
    align-items: center;
  }
`

export const SuccessHeader = styled.div`
  margin-bottom: 4rem;

  h2 {
    font-family: Baloo 2;
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme.product['yellow-dark']};
  }

  @media (max-width: 950px) {
    width: 100%;
    p,
    h2 {
      text-align: center;
      width: 100%;
    }
  }

  @media (max-width: 450px) {
    h2 {
      font-size: 2.4rem;
    }
  }
`

export const OrderSuccessInfo = styled.div`
  display: flex;
  width: 52.6rem;
  padding: 4rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.2rem;
  border-radius: 6px 36px;
  border: 1px solid #dbac2c;

  @media (max-width: 1150px) {
    width: auto;
  }

  @media (max-width: 950px) {
    padding: 3rem;
  }
  @media (max-width: 450px) {
    padding: 2rem;
  }
`

interface IOrderSuccessData {
  $background: string
}

export const OrderSuccessData = styled.div<IOrderSuccessData>`
  display: flex;
  gap: 1.2rem;
  max-width: 46.6rem;
  align-items: center;
  justify-content: space-between;

  span {
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0.8rem;
    color: ${(props) => props.theme.product['purple-light']};
    background: ${(props) => props.$background};
  }

  p {
    line-height: 130%;
    color: ${(props) => props.theme.base['base-text']};
    max-width: 31rem;
  }

  @media (max-width: 950px) {
  }

  @media (max-width: 450px) {
    gap: 0.6rem;

    p {
      font-size: 1.4rem;
    }
  }
`
export const SuccessIllustration = styled.img`
  max-width: 49.2rem;

  @media (max-width: 450px) {
    width: 29rem;
  }

  @media (max-width: 300px) {
    width: 27rem;
  }
`
