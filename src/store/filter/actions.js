export const SET_FILTER_ATTRIBUTE = 'SET_FILTER_ATTRIBUTE'
export const UNSET_FILTER_ATTRIBUTE = 'UNSET_FILTER_ATTRIBUTE'

export const setFilterAttribute = attribute => ({
  type: SET_FILTER_ATTRIBUTE,
  attribute,
})

export const unsetFilterAttribute = attribute => ({
  type: UNSET_FILTER_ATTRIBUTE,
  attribute,
})
