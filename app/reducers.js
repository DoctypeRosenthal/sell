
export const dialog = (state = { mode: 'NEW', type: 'orders', visible: false }, action) => {

	switch(action.type) {
		case 'SET_DIALOG_MODE':
		
			let q = action.query
			if (q.edit && q.id) {
				return {
					mode: 'EDIT',
					type: q.edit,
					visible: true
				}
			} else if (q.new) {
				console.log(q.new)
				return {
					mode: 'NEW',
					type: q.new,
					visible: true
				}
			} else {
				return state
			}
		default:
			return state
	}
}


export const customers = (state = {}, action) => {
	switch(action.type) {
		default:
			return state
	}
}

export const orders = (state = {}, action) => {
	switch(action.type) {
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





