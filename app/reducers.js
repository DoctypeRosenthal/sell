import {
	EDIT_NEW_PRODUCT, EDIT_NEW_ORDER, EDIT_NEW_CUSTOMER,
	EDIT_PRODUCT_BY_ID, EDIT_ORDER_BY_ID, EDIT_CUSTOMER_BY_ID,
	UPDATE_PRODUCT, UPDATE_ORDER, UPDATE_CUSTOMER, 
	CREATE_PRODUCT, CREATE_ORDER, CREATE_CUSTOMER, 
	SET_ACTIVE_PAGE, HIDE_DIALOG
} from './constants'

export const dialog = (state = { action: undefined, visible: false, title: '', item: undefined, id: undefined }, action) => {
	switch(action.type) {
		case EDIT_NEW_CUSTOMER:
		case EDIT_NEW_ORDER:
		case EDIT_NEW_PRODUCT:
			return {
				action: action.type,
				visible: true,
				title: action.title,
				item: action.item,
				id: undefined
			}
		case EDIT_CUSTOMER_BY_ID:
		case EDIT_PRODUCT_BY_ID:
		case EDIT_ORDER_BY_ID: 
			return {
				action: action.type,
				visible: true,
				title: action.title,
				item: action.item,
				id: action.id
			}
		case HIDE_DIALOG:
			return {
				...state,
				visible: false,
			}
		default:
			return state
	}
}

export const activePage = (state = 'home', action) => {
	switch(action.type) {
		case SET_ACTIVE_PAGE:
			return action.path.replace('/', '') || 'home'
		default:
			return state
	}
}

const customer = (state = {}, action) => {
	console.log(action)
	switch(action.type) {
		case CREATE_CUSTOMER:
			return {
				id: action.id,
				nr: null,
				prefix: '',
				forename: '',
				surname: '',
				street: '',
				zip: null,
				city: '',
				email: '',
				website: '',
				note: ''
			}
		default:
			return
	}
}

export const customers = (state = {}, action) => {
	switch(action.type) {
		case CREATE_CUSTOMER:
			return [
				customer(undefined, action),
				...state
			]
			
		default:
			return state
	}
}

const order = (state = {}, action) => {
	switch(action.type) {
		case CREATE_ORDER:
			return {
				id: action.id,
				nr: action.nr,
				created: action.created,
				taxRate: action.taxRate,
				shippingCosts: 0,
				dispatched: undefined,
				products: [],
				customer: {},
				bill: {
					id: action.id,
					nr: action.bill.nr,
					created: action.created,
					payed: undefined,
					customer: {}
				}
			}
	}
}

export const orders = (state = {}, action) => {
	switch(action.type) {
		case CREATE_ORDER:
			return [
				order(undefined, action),
				...state
			]
		default:
			return state
	}
}

export const productGroups = (state = {}, action) => {
	switch(action.type) {
		default:
			return state
	}
}

export const protocol = (state = {}, action) => {
	switch(action.type) {
		default:
			return state
	}
}

export const company = (state = {}, action) => {
	switch(action.type) {
		default:
			return state
	}
}

export const billMeta = (state = {}, action) => {
	switch(action.type) {
		default:
			return state
	}
}

export const dunning = (state = {}, action) => {
	switch(action.type) {
		default:
			return state
	}
}

export const user = (state = {}, action) => {
	switch(action.type) {
		default:
			return state
	}
}
