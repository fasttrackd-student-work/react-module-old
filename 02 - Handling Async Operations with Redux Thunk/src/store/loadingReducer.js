import { INITIALIZE_PRODUCTS_FAILURE, INITIALIZE_PRODUCTS_PENDING, INITIALIZE_PRODUCTS_SUCCESS } from "./productsReducer";

const loadingReducer = (loading = true, action) => {
    switch (action.type) {
        case INITIALIZE_PRODUCTS_PENDING:
            return true
        case INITIALIZE_PRODUCTS_SUCCESS:
        case INITIALIZE_PRODUCTS_FAILURE:
            return false
        default:
            return loading

    }
}

export default loadingReducer