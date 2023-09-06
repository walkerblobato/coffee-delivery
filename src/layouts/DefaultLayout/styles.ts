import styled from 'styled-components'

export const LayoutContainer = styled.div`
  padding: 0 12rem;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  max-width: 144rem;
  background: ${(props) => props.theme.base.background};

  @media (max-width: 1377px) {
    padding: 0 8rem;
  }

  @media (max-width: 1150px) {
    padding: 0 6rem;
  }

  @media (max-width: 499px) {
    padding: 0 4rem;
  }

  @media (max-width: 399px) {
    padding: 0 2rem;
  }
`
