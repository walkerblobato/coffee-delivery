import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;

  img {
    max-width: 35vw;
    height: auto;
  }

  @media (max-width: 1135px) {
    flex-direction: column-reverse;
    img {
      max-width: 70vw;
      height: auto;
    }
  }
`
export const TitlesContainer = styled.div`
  max-width: 62rem;

  @media (max-width: 683px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
`
export const IntroTitles = styled.div`
  gap: 1.6rem;
  margin-bottom: 6.6rem;
  max-width: 58rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 4.8rem;
    font-weight: 800;
    line-height: 130%;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.base['base-title']};
  }

  p {
    font-family: Roboto;
    font-size: 2rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme.base['base-subtitle']};
  }

  @media (max-width: 683px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    h1 {
      margin: 0;
    }
  }

  @media (max-width: 593px) {
    margin-bottom: 3.3rem;

    h1 {
      font-size: 3.5rem;
      margin: 0;
    }

    p {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 499px) {
    max-width: 30rem;

    h1 {
      font-size: 2.8rem;
    }
  }
`

export const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 760px) {
    justify-content: flex-start;
    margin: 0.8rem auto;
  }
`

interface IconBadgeProps {
  background: string
}

export const IconBadge = styled.div<IconBadgeProps>`
  display: flex;
  gap: 1.2rem;
  width: 29.4rem;
  height: 3.2rem;
  align-items: center;

  svg {
    border-radius: 50%;
    background: ${(props) => props.background};
    color: ${(props) => props.theme.base.white};
    padding: 0.8rem 0.8rem;
    width: 3.2rem;
    height: 3.2rem;
  }

  span {
    color: ${(props) => props.theme.base['base-text']};
    font-family: Roboto;
    font-size: 1.6rem;
  }

  @media (max-width: 760px) {
    justify-content: flex-start;
    margin: 0.8rem auto;
  }
`
