export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE'
export const SET_VISIBLE_PRODUCTS = 'SET_VISIBLE_PRODUCTS'

const initialState = {
  isLoading: false,
  list: [],
  visibleProducts: [],
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        isLoading: true,
      }

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.data,
      }

    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    case SET_VISIBLE_PRODUCTS:
      console.log('test set')

      return Object.assign({}, state, {
        visibleProducts: action.data,
      })

    default:
      return state
  }
}
