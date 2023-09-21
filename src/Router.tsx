import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'

import { Home } from './pages/Home'
import { OrderProducts } from './pages/OrderProducts'
import { OrderSuccess } from './pages/OrderSuccess'
import { useContext } from 'react'
import { ShoppingContext } from './context/ShoppingContext'
import { InvalidRoute } from './components/InvalidRoute'

export function Router() {
  const { dataFormShopping } = useContext(ShoppingContext)
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/order-products" element={<OrderProducts />} />
        <Route
          path="/order-success"
          element={dataFormShopping ? <OrderSuccess /> : <InvalidRoute />}
        />

        <Route path="*" element={<InvalidRoute />} />
      </Route>
    </Routes>
  )
}
