const INITIALIZE_PRODUCTS = 'INITIALIZE_PRODUCTS'
const INCREMENT_PRODUCT = 'INCREMENT_PRODUCT'
const DECREMENT_PRODUCT = 'DECREMENT_PRODUCT'
const RESET_PRODUCTS = 'RESET_PRODUCTS'

const productReducer = (products = [], action) => {
    switch (action.type) {
        case INITIALIZE_PRODUCTS:
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

export const InitializeProducts = products => ({
    type: INITIALIZE_PRODUCTS,
    products
})

export const IncrementProduct = name => ({
    type: INCREMENT_PRODUCT,
    name
})

export const DecrementProduct = name => ({
    type: DECREMENT_PRODUCT,
    name
})

export const ResetProducts = () => ({
    type: RESET_PRODUCTS
})

export default productReducer