import { makeID } from './utils'

export const setDialogMode  = query => ({ type: 'SET_DIALOG_MODE', query })

export const setPage = path => ({ type: 'SET_ACTIVE_PAGE', path })

export const createCustomer = () => ({ type: 'CREATE_CUSTOMER', id: makeID() })
export const createOrder 	= () => ({ type: 'CREATE_ORDER', id: makeID() })
export const createProduct  = () => ({ type: 'CREATE_PRODUCT', id: makeID() })

export const createItem = query => {
	switch(query.new) {
		case 'customer':
			return createCustomer()
		case 'order':
			return createOrder()
		case 'product':
			return createProduct()
		default:
			return {}
	}
}

export const updateCustomer = (item, id) => ({ type: 'UPDATE_CUSTOMER', item, id })
export const updateOrder 	= (item, id) => ({ type: 'UPDATE_ORDER', item, id })
export const updateProduct  = (item, id) => ({ type: 'UPDATE_PRODUCT', item, id })

export const updateItem = (type, item, id) => {
	switch(type) {
		case 'customer':
			return updateCustomer(item, id)
		case 'order':
			return updateOrder(item, id)
		case 'product':
			return updateOrder(item, id)
		default:
			return {}
	}	
}