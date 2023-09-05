import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyled } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyled />
    </ThemeProvider>
  )
}

export default App
