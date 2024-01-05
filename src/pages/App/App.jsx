import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home/Home'
import MyAccount from '../MyAccount/MyAccount'
import MyOrder from '../MyOrder/MyOrder'
import MyOrders from '../MyOrders/MyOrders'
import SignIn from '../SignIn/SignIn'
import NotFound from '../NotFound/NotFound'
import Navbar from '../../components/Navbar/Navbar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {path: "/", element: <Home/>},
    {path: "/MyAccount", element: <MyAccount/>},
    {path: "/MyOrder", element: <MyOrder/>},
    {path: "/MyOrders", element: <MyOrders/>},
    {path: "/SignIn", element: <SignIn/>},
    {path: "/*", element: <NotFound/>}
  ])

  return routes
}

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
