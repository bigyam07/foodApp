import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from "./Layouts/RootLayout"
import Cart from "./pages/Cart/Cart.jsx"
import Home from './pages/Home/Home.jsx'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home/>}/>
        <Route path="cart" element={<Cart />} />
      </Route>
    ),
    {
      basename: "/foodApp",
    }
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
