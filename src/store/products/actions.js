export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE'

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
})

export const fetchProductsSuccess = data => ({
  type: FETCH_PRODUCTS_SUCCESS,
  data,
})

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  error,
})
