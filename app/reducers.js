import {
	EDIT_NEW_PRODUCT, EDIT_NEW_ORDER, EDIT_NEW_CUSTOMER,
	EDIT_PRODUCT_BY_ID, EDIT_ORDER_BY_ID, EDIT_CUSTOMER_BY_ID,
	UPDATE_PRODUCT, UPDATE_ORDER, UPDATE_CUSTOMER, 
	CREATE_PRODUCT, CREATE_ORDER, CREATE_CUSTOMER,
	DELETE_PRODUCT,
    DELETE_ORDER,
    DELETE_CUSTOMER,
	ADD_ARTICLE_TO_ORDER,
	SET_ACTIVE_PAGE, HIDE_DIALOG
} from './constants'

export const dialog = (state = { action: undefined, visible: false, title: '', item: undefined }, action) => {
	switch(action.type) {
		case EDIT_NEW_CUSTOMER:
		case EDIT_NEW_ORDER:
		case EDIT_NEW_PRODUCT:
			return {
				action: action.type,
				visible: true,
				title: action.title,
				item: action.item
			}
		case EDIT_CUSTOMER_BY_ID:
		case EDIT_PRODUCT_BY_ID:
		case EDIT_ORDER_BY_ID: 
			return {
				action: action.type,
				visible: true,
				title: action.title,
				item: action.item
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
			if (action.path === '/') {
				return 'home'
			}
			return action.path.replace(/\/(\w+)[\w\/]*/i, '$1')
		default:
			return state
	}
}

const customer = (state = {}, action) => {
	switch(action.type) {
		case CREATE_CUSTOMER:
			return {
				id: action.id,
				nr: action.nr || null,
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

		case CREATE_CUSTOMER:
			return state.filter(x => x.id !== action.id)

		default:
			return state
	}
}


const orderArticle = (state = {}, action) => {
	switch(action.type) {
		case CREATE_ORDER:
		case ADD_ARTICLE_TO_ORDER:
			return {
				id: null,
				nr: null,
				type: '',
				quatity: 0,
				price: 0.00,
				label: {
					id: null,
					name: '',
					price: 0.00
				},
				group: {
					id: null,
					nr: null,
					name: ''
				}
			}
		default:
			return state
	}	
}

const orderArticles = (state = [], action) => {
	switch(action.type) {
		case CREATE_ORDER:
		case ADD_ARTICLE_TO_ORDER:
			return [
				orderArticle(undefined, action),
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
				shippingCosts: action.shippingCosts,
				dispatched: undefined,
				articles: orderArticles(undefined, action),
				address: {
					customerId: null,
					nr: 4563,
					prefix: '',
					forename: '',
					surname: '',
					street: '',
					zip: null,
					city: ''
				},
				bill: {
					id: action.id,
					nr: action.bill.nr,
					created: action.created,
					payed: undefined,
					address: {
						customerId: null,
						prefix: '',
						forename: '',
						surname: '',
						street: '',
						zip: null,
						city: ''
					}
				}
			}
		case ADD_ARTICLE_TO_ORDER:
			if (state.id !== action.id) {
				return state
			}
			console.log(state.articles)
			console.log(orderArticles(state.articles, action))
			return orderArticles(state.articles, action)

		default:
			return state
	}
}

export const orders = (state = [], action) => {
	switch(action.type) {
		case CREATE_ORDER:
			return [
				order(undefined, action),
				...state
			]
		case ADD_ARTICLE_TO_ORDER:
			return state.map(x => order(x, action))


		case DELETE_ORDER:
			return state.filter(x => x.id !== action.id)

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
