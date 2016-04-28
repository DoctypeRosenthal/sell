
export const dialog = (state = { mode: undefined, type: undefined, id: undefined }, action) => {
	switch(action.type) {
		case 'SET_DIALOG_MODE':
			let q = action.query
			if (q.edit && q.id) {
				return {
					mode: 'editing',
					type: q.edit,
					id: q.id
				}
			} else if (q.new) {
				return {
					mode: 'adding',
					type: q.new,
					id: undefined
				}
			} else {
				return state
			}
		default:
			return state
	}
}

export const activePage = (state = 'home', action) => {
	switch(action.type) {
		case 'SET_ACTIVE_PAGE':
			return action.path.replace('/', '') || state
		default:
			return state
	}
}

const customer = (state = {}, action) => {
	console.log(action)
	switch(action.type) {
		case 'CREATE_CUSTOMER':
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
		case 'CREATE_CUSTOMER':
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
		case 'CREATE_ORDER':
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
		case 'CREATE_ORDER':
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





