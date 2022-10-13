export const INITIALIZE_PRODUCTS_PENDING = 'INITIALIZE_PRODUCTS_PENDING'
export const INITIALIZE_PRODUCTS_SUCCESS = 'INITIALIZE_PRODUCTS_SUCCESS'
export const INITIALIZE_PRODUCTS_FAILURE = 'INITIALIZE_PRODUCTS_FAILURE'
const INCREMENT_PRODUCT = 'INCREMENT_PRODUCT'
const DECREMENT_PRODUCT = 'DECREMENT_PRODUCT'
const RESET_PRODUCTS = 'RESET_PRODUCTS'

const productReducer = (products = [], action) => {
    switch (action.type) {
        case INITIALIZE_PRODUCTS_SUCCESS:
            return action.products.map(product => ({
                name: product.name,
                max: product.maximumSelectableQuantity,
                price: product.price,
                amount: 0,
                unit: product.unit
            }))
        case INCREMENT_PRODUCT:
            return products.map(product =>
                product.name === action.name
                    ? {
                        ...product,
                        amount:
                            product.amount < product.max ? product.amount + 1 : product.max
                    }
                    : product
            )
        case DECREMENT_PRODUCT:
            return products.map(product =>
                product.name === action.name
                    ? {
                        ...product,
                        amount:
                            product.amount > 0 ? product.amount - 1 : 0
                    }
                    : product
            )
        case RESET_PRODUCTS:
            return products.map(product => ({
                ...product,
                amount: 0
            }))
        default:
            return products
    }
}

const initializeProductsPending = () => ({
    type: INITIALIZE_PRODUCTS_PENDING
})

const initializeProductsSuccess = (products) => ({
    type: INITIALIZE_PRODUCTS_SUCCESS,
    products
})

const initializeProductsFailure = (message) => ({
    type: INITIALIZE_PRODUCTS_FAILURE,
    message
})

export const initializeProductsAsync = () => (dispatch) => {
    dispatch(initializeProductsPending())
    fetch('http://localhost:8080/lemonadestand/1/inventory')
        .then(data => data.json())
        .then(products =>
            dispatch(initializeProductsSuccess(products))
        )
        .catch(e => dispatch(initializeProductsFailure(e.message)))
}

export const incrementProduct = name => ({
    type: INCREMENT_PRODUCT,
    name
})

export const decrementProduct = name => ({
    type: DECREMENT_PRODUCT,
    name
})

export const resetProducts = () => ({
    type: RESET_PRODUCTS
})

export default productReducer