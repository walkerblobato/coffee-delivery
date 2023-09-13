import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'

import { Home } from './pages/Home'
import { OrderProducts } from './pages/OrderProducts'
import { OrderSuccess } from './pages/OrderSuccess'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/order-products" element={<OrderProducts />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Route>
    </Routes>
  )
}
