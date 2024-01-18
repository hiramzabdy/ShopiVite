import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShopingCartContextProvider } from '../../context/ShopingCartContext'
import Home from '../Home/Home'
import MyAccount from '../MyAccount/MyAccount'
import MyOrder from '../MyOrder/MyOrder'
import MyOrders from '../MyOrders/MyOrders'
import SignIn from '../SignIn/SignIn'
import NotFound from '../NotFound/NotFound'
import Navbar from '../../components/Navbar/Navbar'
import ChechoutSideMenu from '../../components/CheckoutSideMenu/CheckoutSideMenu'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {path: "/", element: <Home/>},
    {path: "/MyAccount", element: <MyAccount/>},
    {path: "/MyOrder", element: <MyOrder/>},
    {path: "/MyOrders", element: <MyOrders/>},
    {path: "/MyOrders/last", element: <MyOrder/>},
    {path: "/MyOrders/:id", element: <MyOrder/>},
    {path: "/SignIn", element: <SignIn/>},
    {path: "/*", element: <NotFound/>},
    {path: "/:category", element: <Home/>}
  ])

  return routes
}

function App() {

  return (
    <ShopingCartContextProvider>
      <BrowserRouter>
        <Navbar/>
        <AppRoutes/>
        <ChechoutSideMenu/>
      </BrowserRouter>
    </ShopingCartContextProvider>
  )
}

export default App
