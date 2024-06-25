import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Checkout } from './pages/checkout'
import { DefaultLayout } from './layouts/DefaultLayout'
import Success from './pages/Success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
