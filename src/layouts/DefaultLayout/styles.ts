import styled from 'styled-components'

export const LayoutContainer = styled.div`
  padding: 0 12rem;
  flex-direction: column;
  align-items: center;
  display: flex;
  background: ${(props) => props.theme.base.background};

  @media (max-width: 1050px) {
    padding: 0 6rem;
  }

  @media (max-width: 499px) {
    padding: 0 3rem;
  }

  @media (max-width: 399px) {
    padding: 0 2rem;
  }
`
