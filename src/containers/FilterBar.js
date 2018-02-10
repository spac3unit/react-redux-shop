import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchProducts } from 'store/actions'
import { FilterBar } from 'components'

const filterableCriteria = [
  {
    displayValue: 'Color',
    flag: 'color',
    values: ['red', 'green', 'yellow', 'pink'],
  },
  {
    displayValue: 'Size',
    flag: 'size',
    values: ['xs', 'sm', 'm', 'l', 'xl'],
  },
  {
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

const FilterGroup = (props) => {
  return (
    <div className="option-set" data-group="brand">
      <input type="checkbox" id="brand-all" className="all" defaultChecked />
      <label htmlFor="brand-all">all checks</label>
      {filterableCriteria.map(criteria => (
        <div>
          <h3>{criteria.displayValue}</h3>
          {criteria.values.map(val => (
            <div>
              <input
                type="checkbox"
                name={criteria.flag}
                id={val}
                value={val}
                onChange={props.toggleCheckbox}
                checked={props.checked}
              />
              <label htmlFor={val}>{val}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

class FilterBarContainer extends Component {
  state = {
    filters: {
      color: [],
      size: [],
    },
  }

  setFilter = (filterName, filterValue) => {
    const newobj = Object.assign({}, this.state.filters, {
      [filterName]: [...this.state.filters[filterName], filterValue],
    })
    return newobj
  }
  unsetFilter = (filterName, filterValue) => {
    const newArr = this.state.filters[filterName].filter(item => item !== filterValue)
    const newobj = Object.assign({}, this.state.filters, {
      [filterName]: newArr,
    })
    return newobj
  }
  resetFilter = () => {}
  toggleFilter = (event) => {
    const target = event.target
    const isChecked = target.type === 'checkbox' ? target.checked : target.value
    const filterName = target.name
    const filterValue = target.value
    this.setState({
      filters: isChecked
        ? this.setFilter(filterName, filterValue)
        : this.unsetFilter(filterName, filterValue),
    })
  }

  render() {
    console.log(this.state.filters)
    return (
      <div>
        <FilterGroup toggleCheckbox={this.toggleFilter} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  filterList: state,
})

const mapDispatchToProps = dispatch => ({
  // getProductsList: () => dispatch(fetchProducts()),
})

// export default connect(mapStateToProps, mapDispatchToProps)(FilterBarContainer)
export default FilterBarContainer

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
