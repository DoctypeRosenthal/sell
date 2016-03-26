/*-----------------------------------------------------------------------------
 * GENERAL PURPOSE UTILITY FUNCTIONS
 *---------------------------------------------------------------------------*/

// useful check for empty or undefined values but NOT 0 as it might be a user-defined val.
export const isEmpty = value => typeof value === 'undefined' || value === '' || value === null || value.length === 0