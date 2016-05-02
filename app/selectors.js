/**
 * SELECTOR AND MEMOIZED SELECTOR FUNCTIONS
 * (not REAL memoized selectors yet, only prototypes)
 *
 * IMPORTANT: these selectors return a copy of the item. NOT a reference!
 */
export const getCustomerById = (id, state) => state.customers.filter(x => x.id === id)[0]
export const getOrderById = (id, state) => state.orders.filter(x => x.id === id)[0]
export const getProductById = (id, state) => state.productGroups.filter(x => x.id === id)[0]

/**
 * returns the first item of the given type from the store
 * @param  {string} type  The item type (e.g. 'customers', 'orders'...)
 * @param  {object} state The store state
 * @return {object}       The first item in the type's array
 */
export const getLatest = (type, state) => state[type].slice(0,1)[0]
