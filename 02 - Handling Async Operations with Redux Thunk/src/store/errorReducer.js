import { INITIALIZE_PRODUCTS_FAILURE, INITIALIZE_PRODUCTS_PENDING, INITIALIZE_PRODUCTS_SUCCESS } from "./productsReducer";

const errorReducer = (error = '', action) => {
    switch (action.type) {
        case INITIALIZE_PRODUCTS_FAILURE:
            return action.message
        case INITIALIZE_PRODUCTS_SUCCESS:
        case INITIALIZE_PRODUCTS_PENDING:
            return ''
        default:
            return error
    }
}

export default errorReducer