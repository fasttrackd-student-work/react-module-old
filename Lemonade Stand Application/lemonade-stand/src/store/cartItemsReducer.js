const ADD_CART_ITEM = 'ADD_CART_ITEM'
const RESET_CART_ITEMS = 'RESET_CART_ITEMS'

const calcPercent = (amount, max, maxFill = 100) =>
    100 - (amount / max) * maxFill

const grabAmountAndMax = (products, name) =>
    products.reduce(
        (acc, curr) =>
            curr.name === name
                ? { amount: curr.amount, max: curr.max }
                : acc,
        { amount: 0, max: 8 }
    )

const cartItemReducer = (cartItems = [], action) => {
    switch (action.type) {
        case ADD_CART_ITEM:
            return [
                ...cartItems,
                {
                    glass: {
                        percentLemonJuice: calcPercent(
                            ...action.grabAmountAndMax(action.products, 'Lemon Juice'),
                            90
                        ),
                        percentSugar: calcPercent(
                            ...action.grabAmountAndMax(action.products, "Sugar"),
                            30
                        ),
                        numberOfIceCubes: grabAmountAndMax(action.products, 'Ice Cubes').amount
                    },
                    products: action.products,
                    price: action.products.reduce(
                        (acc, { amount, price }) => acc + amount * price,
                        0
                    )
                }
            ]
        case RESET_CART_ITEMS:
            return []
        default:
            return cartItems
    }
}

export const addCartItem = (products) => ({
    type: ADD_CART_ITEM,
    products
})

export const resetCartItems = () => ({
    type: RESET_CART_ITEMS
})

export default cartItemReducer