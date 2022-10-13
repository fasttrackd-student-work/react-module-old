import { calcPercent, grabAmountAndMax } from "../utils"

const ADD_CART_ITEM = 'ADD_CART_ITEM'
const RESET_CART_ITEMS = 'RESET_CART_ITEMS'


const cartItemReducer = (cartItems = [], action) => {
    switch (action.type) {
        case ADD_CART_ITEM:
            return [
                ...cartItems,
                {
                    glass: {
                        percentLemonJuice: calcPercent(
                            grabAmountAndMax(action.products, 'Lemon Juice'),
                            90
                        ),
                        percentSugar: calcPercent(
                            grabAmountAndMax(action.products, 'Sugar'),
                            30
                        ),
                        numberOfIceCubes: grabAmountAndMax(action.products, 'Ice')[0]
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