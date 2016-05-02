/*-----------------------------------------------------------------------------
 * GENERAL PURPOSE UTILITY FUNCTIONS
 *---------------------------------------------------------------------------*/

// useful check for empty or undefined values but NOT 0 as it might be a user-defined val.
export const isEmpty = value => typeof value === 'undefined' || value === '' || value === null || value.length === 0

// returns the css-classes given to a component
export const getClassName = props => props.className || ''

// creates a random text with n letters
export const makeRandText = n => {
	let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
	if (n > 0) {
		return possible.charAt(Math.floor(Math.random() * possible.length)) + makeRandText(n - 1)
	}
	return ''
}
// create a new ID: Date in ms as bigint + a random text of 5 letters
export const makeID = () => parseInt(Date.now()) + makeRandText(5)
export const formatDate = dateInMs => (new Date(dateInMs)).toLocaleDateString()
export const calcNetto = (brutto, tax) => brutto - brutto / (100 + tax) * tax
export const calcBrutto = (netto, tax) => netto + netto / 100 * tax

export const calcTaxMoney = (brutto, tax) => brutto / (100 + tax) * tax
