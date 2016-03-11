import App from './App'



import Dialog from './containers/Dialog'

export const ROUTES = {
  path: '/', component: App,
  indexRoute: { component: Home },
  childRoutes: [
    {
    	path: '/customers', component: Customers,
      childRoutes: [
        { path: '/:action', component: Dialog }
      ]
    },
    
    { path: 'orders', component: Orders },
    { path: 'products', component: Products },
    { path: 'options', component: Options },
    { path: 'protocol', component: Protocol }
  ]
}