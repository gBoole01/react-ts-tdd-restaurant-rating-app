import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import RestaurantDetailsPage from './pages/RestaurantDetailsPage'
import RestaurantListPage from './pages/RestaurantListPage'
import ErrorPage from './pages/ErrorPage'
import { RestaurantsProvider } from './contexts/RestaurantsProvider'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RestaurantListPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/restaurants/:slug',
    element: <RestaurantDetailsPage />,
  },
])

export default function App() {
  return (
    <RestaurantsProvider>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </RestaurantsProvider>
  )
}
