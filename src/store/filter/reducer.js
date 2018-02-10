export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const SET_FILTER_ATTRIBUTE = 'SET_FILTER_ATTRIBUTE'
export const UNSET_FILTER_ATTRIBUTE = 'UNSET_FILTER_ATTRIBUTE'
const initialState = [
  {
    attribute: 'color',
    isActive: false,
  },
  {
    attribute: 'size',
    isActive: false,
  },
  {
    attribute: 'price',
    isActive: false,
  },
]

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_ATTRIBUTE:
      return action.attribute

    default:
      return state
  }
}
