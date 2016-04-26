/*-----------------------------------------------------------------------------
 * GENERAL PURPOSE UTILITY FUNCTIONS
 *---------------------------------------------------------------------------*/

// useful check for empty or undefined values but NOT 0 as it might be a user-defined val.
export const isEmpty = value => typeof value === 'undefined' || value === '' || value === null || value.length === 0

// returns the css-classes given to a component
export const getClassName = props => props.className || ''

export const makeRandText = letters => {
	let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
	if (letters > 0) {
		return possible.charAt(Math.floor(Math.random() * possible.length)) + makeRandText(letters - 1)
	}
	return ''
}
// create a new ID: Date in ms as bigint + a random text of 5 letters
export const makeID = () => parseInt(Date.now()) + makeRandText(5)