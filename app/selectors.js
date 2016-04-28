/**
 * SELECTOR FUNCTIONS
 * (not REAL selectors yet, only prototypes)
 */
const getByID = (id, state) => state.filter(x => x.id === id)[0]

export const getItemByID = (id, type, state) => {
	switch(type) {
		case 'customer':
			return getByID(id, state.customers)
		case 'order':
			return getByID(id, state.orders)
		case 'product':
			return getByID(id, state.products)
	}
}

const getLatest = state => state[0]

export const getLatestItem = (type, state) => {
	switch(type) {
		case 'customer':
			return getLatest(state.customers)
		case 'order':
			return getLatest(state.orders)
		case 'product':
			return getLatest(state.products)
	}
}

