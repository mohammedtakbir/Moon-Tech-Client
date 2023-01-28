import { actionsType } from "./ActionsType"

export const initialState = {
    loading: false,
    error: null,
    products: [],
    cart: [],
    wishList: []
}
export const productReducer = (state, action) => {
    switch (action.type) {
        case actionsType.FETCHING_START:
            return {
                ...state,
                loading: true
            }
        case actionsType.FETCHING_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case actionsType.FETCHING_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case actionsType.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case actionsType.ADD_TO_WISHLIST:
            return {
                ...state,
                wishList: [...state.wishList, action.payload]
            }
        default:
            return state
    }
}

