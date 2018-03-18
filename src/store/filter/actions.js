export const SET_FILTER = 'SET_FILTER'
export const UNSET_FILTER = 'UNSET_FILTER'

export const setFilter = (filterName, filterValue) => ({
  type: SET_FILTER,
  filterName,
  filterValue,
})

export const unsetFilter = (filterName, filterValue) => ({
  type: UNSET_FILTER,
  filterName,
  filterValue,
})
export function filterProducts(products, filter) {
  const filterKeys = Object.keys(filter)
  return launches.filter((launch) => {
    return filterKeys.reduce(
      (acc, key) => acc && launch[key] === filter[key],
      true
    )
  })
}
