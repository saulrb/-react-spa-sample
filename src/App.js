import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home'
import Products from './pages/Products'
import RootLayout from './pages/Root'
import ErrorPage from './pages/Error'

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />,
//     <Route path="/products" element={<Products />} />
//   </Route>
// )
// const router = createBrowserRouter(routeDefinitions)

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage />, errorElement: <h1>404</h1> },
      { path: '/products', element: <Products />, errorElement: <h1>404</h1> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
