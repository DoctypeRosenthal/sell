import App from './App'

/* pages */
import Home from './pages/Home'
import Customers from './pages/Customers'
import Orders from './pages/Orders'
import Products from './pages/Products'
import Options from './pages/Options'
import Protocol from './pages/Protocol'

export const ROUTES = {
  path: '/', component: App,
  indexRoute: { component: Home },
  childRoutes: [
    {
    	path: 'customers(/:filter)', component: Customers
    },
    { path: 'orders(/:filter)', component: Orders },
    { path: 'products(/:filter)', component: Products },
    { path: 'options', component: Options },
    { path: 'protocol', component: Protocol }
  ]
}