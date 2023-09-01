import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyled } from './styles/global'
import { Header } from './components/Header'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <h1>Coffee Delivery</h1>
      <GlobalStyled />
    </ThemeProvider>
  )
}

export default App
