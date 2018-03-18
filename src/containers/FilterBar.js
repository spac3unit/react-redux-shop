import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  setFilter,
  unsetFilter,
  setProducts,
  setVisibleProducts,
} from 'store/actions'
import { FilterBar } from 'components'
import { filteredArray, filterBy } from '../services/helpers'

function hashURLFromState(state) {
  window.location.hash = `#!/?${filters(state)}`
}
const active = (appliedFilters, attribute, value) => {
  return (
    appliedFilters[attribute] && appliedFilters[attribute].indexOf(value) > -1
  )
}

class FilterBarContainer extends Component {
  state = {
    filters: {
      color: [],
      size: ['m', 'l'],
    },
  }
  filterConfig = [
    {
      id: 1,
      displayValue: 'Color',
      flag: 'color',
      values: ['red', 'green', 'yellow', 'pink'],
    },
    {
      id: 2,
      displayValue: 'Size',
      flag: 'size',
      values: ['xs', 'sm', 'm', 'l', 'xl'],
    },
    {
      id: 3,
      displayValue: 'Price',
      flag: 'price',
      values: [],
      ranges: [
        {
          displayValue: 'Up - $49.99',
          range: {
            min: 0,
            max: 49.99,
          },
        },
        {
          displayValue: '$50.00 - $99.99',
          range: {
            min: 50.0,
            max: 99.99,
          },
        },
      ],
    },
  ]

  _setFilter = (filterName, filterValue) => {
    const newobj = Object.assign({}, this.state.filters, {
      [filterName]: [...this.state.filters[filterName], filterValue],
    })
    return newobj
  }
  _unsetFilter = (filterName, filterValue) => {
    const newArr = this.state.filters[filterName].filter(item => item !== filterValue)
    const newobj = Object.assign({}, this.state.filters, {
      [filterName]: newArr,
    })
    return newobj
  }
  resetFilter = () => {}

  toggleFilter = (event) => {
    const target = event.target,
      isChecked = target.type === 'checkbox' ? target.checked : target.value,
      filterName = target.name,
      filterValue = target.value

    if (isChecked) {
      this.setState({
        filters: {
          color: [...this.state.filters.color, filterValue],
        },
      })
    } else {
      const newArr = this.state.filters.color.filter((item) => {
        return item !== filterValue
      })
      this.setState({
        filters: {
          color: newArr,
        },
      })
    }
  }
  applyFilter = (array, filters) => {
    const filterKeys = Object.keys(filters)
    // filters all elements passing the criteria
    return array.filter((item) => {
      // dynamically validate all filter criteria
      return filterKeys.some(key => !!~filters[key].indexOf(item[key]))
    })
  }

  render() {
    const products = [
      { id: 1, size: 's', color: 'red' },
      { id: 2, size: 's', color: 'green' },
      { id: 3, size: 'm', color: 'pink' },
      { id: 4, size: 'l', color: 'yellow' },
      { id: 5, size: 'x', color: 'yellow' },
    ]
    const filters = {
      color: ['ff', 'brown'],
      size: ['m', 'l'],
    }
    console.log(this.state.filters)
    console.log(this.applyFilter(products, this.state.filters))

    return (
      <div>
        <FilterBar
          filterConfig={this.filterConfig}
          toggleCheckbox={this.toggleFilter}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  filterList: state.filter,
  products: state.products.list,
})

const mapDispatchToProps = dispatch => ({
  setFilter: (name, value) => dispatch(setFilter(name, value)),
  unsetFilter: (name, value) => dispatch(unsetFilter(name, value)),
  setProducts: products => dispatch(setVisibleProducts(products)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterBarContainer)
// export default FilterBarContainer

// setFiltersForSet = (flag, valu) => {
//   const obj = this.state.currentFilters.filter(item => item.flag === flag)
//   for (const prop in obj) {
//     for (const item of obj[prop].val) {
//       if (obj[prop].val.has(valu)) {
//         obj[prop].val.delete(valu)
//         return { newObj: item }
//       }
//       obj[prop].val.add(valu)
//       return { newObj: item }
//     }
//   }
// }
