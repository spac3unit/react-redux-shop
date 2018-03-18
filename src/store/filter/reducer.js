export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const SET_FILTER = 'SET_FILTER'
export const UNSET_FILTER = 'UNSET_FILTER'
const initialState = {
  color: [],
  size: [],
}

export default (state = initialState, action) => {
  const { filterName, filterValue } = action
  switch (action.type) {
    case SET_FILTER:
      return Object.assign({}, state, {
        [filterName]: [...state[filterName], filterValue],
      })
    case UNSET_FILTER:
      const newArr = state[filterName].filter(item => item !== filterValue)
      const newobj = Object.assign({}, state, {
        [filterName]: newArr,
      })
      return newobj
    default:
      return state
  }
}
// setFilter = (filterName, filterValue) => {
//   const newobj = Object.assign({}, this.state.filters, {
//     [filterName]: [...this.state.filters[filterName], filterValue],
//   })
//   return newobj
// }
// unsetFilter = (filterName, filterValue) => {
//   const newArr = this.state.filters[filterName].filter(item => item !== filterValue)
//   const newobj = Object.assign({}, this.state.filters, {
//     [filterName]: newArr,
//   })
//   return newobj
// }
