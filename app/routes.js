/* the App */
import App from './App'

/* pages */
import Home from './pages/Home'
import Customers from './pages/Customers'
import Orders from './pages/Orders'
import Products from './pages/Products'
import Options from './pages/Options'
import Protocol from './pages/Protocol'

const ROUTES = {
  path: '/', component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'customers', component: Customers },
    { path: 'customers', component: Orders },
    { path: 'customers', component: Products },
    { path: 'customers', component: Options },
    { path: 'customers', component: Protocol }
  ]
}

export default ROUTES