import { useState } from 'react'
import './App.css'
import Home from '../Home/Home'
import MyAccount from '../MyAccount/MyAccount'
import MyOrder from '../MyOrder/MyOrder'
import MyOrders from '../MyOrders/MyOrders'
import NotFound from '../NotFound/NotFound'
import SignIn from '../SignIn/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-red-300'>
      Equisde
      <Home></Home>
      <MyAccount></MyAccount>
      <MyOrder></MyOrder>
      <MyOrders></MyOrders>
      <NotFound></NotFound>
      <SignIn></SignIn>
    </div>
  )
}

export default App
