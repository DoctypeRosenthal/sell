/**
 * SELECTOR AND MEMOIZED SELECTOR FUNCTIONS
 * (not REAL memoized selectors yet, only prototypes)
 */
export const getCustomerById = (id, state) => state.customers.filter(x => x.id === id)[0]
export const getOrderById = (id, state) => state.orders.filter(x => x.id === id)[0]
export const getProductById = (id, state) => state.productGroups.filter(x => x.id === id)[0]

export const getLatestCustomer = state => state.customers[0]
export const getLatestOrder = state => state.orders[0]
export const getLatestProduct = state => state.productGroups[0]
