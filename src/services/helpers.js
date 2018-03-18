const filters = {
  color: ['yellow', 'brown'],
  size: ['s'],
}
const products = [
  { id: 1, size: 's', color: 'yellow' },
  { id: 2, size: 's', color: 'brown' },
  { id: 3, size: 'm', color: 'ff' },
  { id: 4, size: 'l', color: 'xxx' },
  { id: 5, size: 's', color: 'xxx' },
]

export const filterBy = (array, filters) => {
  const filterKeys = Object.keys(filters)
  // filters all elements passing the criteria
  return array.filter((item) => {
    // dynamically validate all filter criteria
    return filterKeys.some(key => !!~filters[key].indexOf(item[key]))
  })
}

const filtered = filterBy(products, filters)

// // A function which returns a function to be used for filtering.
// const includeSize = includedSize => ({ size }) => size === includedSize
// const includeColors = includedColors => ({ colors }) =>
//   colors === includedColors

// // Another function which returns a function to also be used for filtering.
// // const includeColors = includedColors => ({ colors }) =>
// //   colors.some(color => includedColors.includes(color))

// // This function takes any number of functions, and returns a function.
// // It returns a function that will "AND" together their return values of all the original functions
// const and = (...funcs) => (...innerArgs) =>
//   funcs.every(func => func(...innerArgs))

// // Create a filter which includes the type `filterConditionType`
// // const sizeFilter = includeSize(filterConditionSize)
// const sizeFilter = filterConditionSize.map((filterParam, idx) =>
//   arr.filter(item => item === filterParam))
// // Create a filter which includes the colors in `filterConditionColors`
// const colorsFilter = includeColors(filterConditionColors)

// export const filteredArray = arr.filter(sizeFilter)

// And print it
// console.log('filteredArray: ', filteredArray)

// const filteredArray = prod.filter(el =>
//   el.color == query.color &&
//     el.size.some(e => query.size.some(ele => ele == e)))
