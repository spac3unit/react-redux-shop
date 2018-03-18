export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE'
export const SET_VISIBLE_PRODUCTS = 'SET_VISIBLE_PRODUCTS'
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

export const setVisibleProducts = data => ({
  type: SET_VISIBLE_PRODUCTS,
  data,
})
export function setProducts(products, filter) {
  return function (dispatch) {
    const filtered = products.filter((item) => {
      for (const key in filter) {
        if (item[key] === undefined || item[key] != filter[key]) return false
      }
      return true
    })
    dispatch(setVisibleProducts(filtered))
  }
}
