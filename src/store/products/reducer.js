export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE'
const initialState = {
  isLoading: false,
  list: [],
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        isLoading: true,
        data: 'datatatata',
      }

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.products,
        list: action.data,
      }

    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }

    default:
      return state
  }
}
