import { makeID } from './utils'
import translations from './translations.json'
import * as selectors from './selectors'

import {
    EDIT_NEW_PRODUCT,
    EDIT_NEW_ORDER,
    EDIT_NEW_CUSTOMER,
    EDIT_PRODUCT_BY_ID,
    EDIT_ORDER_BY_ID,
    EDIT_CUSTOMER_BY_ID,
    CREATE_PRODUCT,
    CREATE_ORDER,
    CREATE_CUSTOMER,
    UPDATE_PRODUCT,
    UPDATE_ORDER,
    UPDATE_CUSTOMER,
    DELETE_PRODUCT,
    DELETE_ORDER,
    DELETE_CUSTOMER,
    ADD_ARTICLE_TO_ORDER,
    SET_ACTIVE_PAGE,
    HIDE_DIALOG
} from './constants'

/**
 * DIALOG
 */
export const editNewOrder = state => ({
    type: EDIT_NEW_ORDER,
    title: translations.DE.dialog[EDIT_NEW_ORDER],
    item: selectors.getLatest('orders', state)
})
export const editOrderById = id => ({
    type: EDIT_ORDER_BY_ID,
    item: selectors.getItemById('customers', id),
    title: translations.DE.dialog[EDIT_ORDER_BY_ID]
})
export const editNewCustomer = state => ({
    type: EDIT_NEW_CUSTOMER,
    title: translations.DE.dialog[EDIT_NEW_CUSTOMER],
    item: selectors.getLatest('customers', state)
})
export const editCustomerById = id => ({
    type: EDIT_CUSTOMER_BY_ID,
    item: selectors.getItemById('customers', id),
    title: translations.DE.dialog[EDIT_CUSTOMER_BY_ID]
})
export const deleteCustomer = item => ({type: DELETE_CUSTOMER, id: item.id})
export const deleteOrder = item => ({type: DELETE_ORDER, id: item.id})
export const deleteProduct = item => ({type: DELETE_PRODUCT, id: item.id})

export const addArticleToOrder = id => ({
    type: ADD_ARTICLE_TO_ORDER,
    id
})
export const hideDialog = () => ({ type: HIDE_DIALOG })

/**
 * CUSTOMERS
 */
export const createCustomer = customer => ({ type: CREATE_CUSTOMER, id: makeID() })
export const updateCustomer = (item, id) => ({ type: UPDATE_CUSTOMER, item, id })


/**
 * ORDERS
 */
export const createOrder = storeState => ({
    type: CREATE_ORDER,
    id: makeID(),
    created: Date.now(),
    taxRate: storeState.company.taxRates[0],
    shippingCosts: 1.45, // later: fetch that from server
    nr: 2755, // later: fetch the next order number from server
    bill: {
        nr: 160965 // later: fetch the next order number from server
    }
})
export const updateOrder = (item, id) => ({ type: UPDATE_ORDER, item, id })

/**
 * PRODUCTS AND GROUPS
 */
export const createProduct = () => ({ type: CREATE_PRODUCT, id: makeID() })
export const updateProduct = (item, id) => ({ type: UPDATE_PRODUCT, item, id })

/**
 * UPDATE IN GENERAL
 */
export const updateItem = (item, action, id) => {
    switch (action) {
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

/**
 * SET PAGE NAME
 */
export const setPage = path => ({ type: SET_ACTIVE_PAGE, path })
