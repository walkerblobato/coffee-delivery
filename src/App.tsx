import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyled } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ShoppingContextProvider } from './context/ShoppingContext'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ShoppingContextProvider>
          <Router />
        </ShoppingContextProvider>
      </BrowserRouter>

      <GlobalStyled />
    </ThemeProvider>
  )
}

export default App
