import { makeID } from './utils'
import { 
	EDIT_NEW_PRODUCT, EDIT_NEW_ORDER, EDIT_NEW_CUSTOMER,
	EDIT_PRODUCT_BY_ID, EDIT_ORDER_BY_ID, EDIT_CUSTOMER_BY_ID,
	CREATE_PRODUCT, CREATE_ORDER, CREATE_CUSTOMER,
	UPDATE_PRODUCT, UPDATE_ORDER, UPDATE_CUSTOMER,
	SET_ACTIVE_PAGE
} from './constants'

export const editNewOrder = () => ({type: EDIT_NEW_ORDER})
export const editOrderById = id => ({ type: EDIT_ORDER_BY_ID, id })

export const createCustomer = customer => ({ type: CREATE_CUSTOMER, id: makeID(), customer })
export const createProduct  = () => ({ type: CREATE_PRODUCT, id: makeID() })
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

export const updateCustomer = (item, id) => ({ type: UPDATE_CUSTOMER, item, id })
export const updateOrder 	= (item, id) => ({ type: UPDATE_ORDER, item, id })
export const updateProduct  = (item, id) => ({ type: UPDATE_PRODUCT, item, id })

export const updateItem = (item, action, id) => {
	switch(action) {
		case EDIT_NEW_PRODUCT:
		case EDIT_PRODUCT_BY_ID:
			return updateProduct(item, id)
		case EDIT_NEW_CUSTOMER:
		case EDIT_CUSTOMER_BY_ID:
			return updateCustomer(item, id)
		case EDIT_NEW_ORDER:
		case EDIT_ORDER_BY_ID:
			return updateOrder(item, id)
	}
}

export const setPage 		= path => ({ type: SET_ACTIVE_PAGE, path })
