import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyled } from './styles/global'
import { Header } from './components/Header'
import { Home } from './pages/Home'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Home />
      <GlobalStyled />
    </ThemeProvider>
  )
}

export default App
