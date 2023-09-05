import styled from 'styled-components'

export const IntroContainer = styled.div`
  max-width: 112rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 35vw;
    height: auto;
  }

  @media (max-width: 80rem) {
    flex-direction: column-reverse;
    img {
      max-width: 70vw;
      height: auto;
    }
  }
`
export const TitlesContainer = styled.div`
  @media (max-width: 66rem) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 8rem;
    margin: 0 auto;

    @media (max-width: 48rem) {
      padding: 0 4rem;
    }
  }
`
export const IntroTitles = styled.div`
  gap: 1.6rem;
  max-width: 58.8rem;
  margin: 0 0 6.6rem 0;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 4.8rem;
    font-weight: 800;
    color: ${(props) => props.theme.base['base-title']};
  }

  h4 {
    font-family: Roboto;
    font-size: 2rem;
    font-weight: 400;
    color: ${(props) => props.theme.base['base-subtitle']};
  }

  @media (max-width: 80rem) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    h2 {
      font-size: 2.8rem;
    }
  }

  @media (max-width: 48rem) {
    gap: 0.8rem;

    h2 {
      font-size: 2.8rem;
    }
  }

  @media (max-width: 593px) {
    h2 {
      font-size: 2.2rem;
    }
    h4 {
      font-size: 1.6rem;
    }
  }
`

export const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem 1.6rem;

  @media (max-width: 76rem) {
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

  @media (max-width: 76rem) {
    justify-content: flex-start;
    margin: 0.8rem auto;
  }
`
