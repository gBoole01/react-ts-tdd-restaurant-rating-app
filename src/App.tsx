import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import Layout from './components/Layout'
import RestaurantDetailsPage from './pages/RestaurantDetailsPage'
import RestaurantListPage from './pages/RestaurantListPage'
import ErrorPage from './pages/ErrorPage'
import store from './store/store'

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
    <Provider store={store}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </Provider>
  )
}
