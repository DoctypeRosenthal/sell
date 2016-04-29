import { makeID } from './utils'
import { 
	CREATE_PRODUCT, CREATE_ORDER, CREATE_CUSTOMER,
	UPDATE_PRODUCT, UPDATE_ORDER, UPDATE_CUSTOMER,
	SET_ACTIVE_PAGE, SET_DIALOG_MODE
} from './constants'

export const createCustomer = () => ({ type: CREATE_CUSTOMER, id: makeID() })
export const createOrder 	= storeState => ({ 
	type: CREATE_ORDER, 
	id: makeID(),
	created: Date.now(),
	taxRate: storeState.company.taxRates[0],
	nr: 2755, // later: fetch the next order number from server
	bill: {
		nr: 160965 // later: fetch the next order number from server
	}
})
export const createProduct  = () => ({ type: CREATE_PRODUCT, id: makeID() })
export const createItem 	= (query, storeState) => {
	switch(query.new) {
		case 'customer':
			return createCustomer()
		case 'order':
			return createOrder(storeState)
		case 'product':
			return createProduct()
		default:
			return { type: '' }
	}
}

export const updateCustomer = (item, id) => ({ type: UPDATE_CUSTOMER, item, id })
export const updateOrder 	= (item, id) => ({ type: UPDATE_ORDER, item, id })
export const updateProduct  = (item, id) => ({ type: UPDATE_PRODUCT, item, id })
export const updateItem 	= (type, item, id) => {
	switch(type) {
		case 'customer':
			return updateCustomer(item, id)
		case 'order':
			return updateOrder(item, id)
		case 'product':
			return updateOrder(item, id)
	}	
}

export const setDialogMode  = query => ({ type: SET_DIALOG_MODE, query })
export const setPage 		= path => ({ type: SET_ACTIVE_PAGE, path })
