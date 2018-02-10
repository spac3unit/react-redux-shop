import React from 'react'
import styled from 'styled-components'

function hashURLFromState(state) {
  window.location.hash = `#!/?${filters(state)}`
}
const active = (appliedFilters, attribute, value) => {
  return (
    appliedFilters[attribute] && appliedFilters[attribute].indexOf(value) > -1
  )
}
const attributes = ['color', 'type', 'price']
const config = {
  // subjects: shoes,
  filterableCriteria: [
    {
      title: 'Shoes Type',
      attribute: 'type',
    },
    {
      title: 'Color',
      attribute: 'color',
    },
    {
      title: 'Size',
      attribute: 'size',
    },
    {
      title: 'Price',
      attribute: 'price',
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
  ],
}
const FieldSet = styled.fieldset`
  border: none;
`

const FilterGroup = (option) => {
  config.filterableCriteria.map(c => console.log(c.attribute))

  return (
    <div>
      {config.filterableCriteria.map(creteria => (
        <div className="option-set" data-group="brand">
          <input
            type="checkbox"
            id="brand-all"
            className="all"
            defaultChecked
          />
          <label htmlFor="brand-all">all checks</label>
          <input type="checkbox" id={option.value} />
          <label htmlFor={option.value}>{option.title}</label>
        </div>
      ))}
    </div>
  )
}
const FilterCriteria = () => {
  return (
    <FieldSet>
      <h4>Title</h4>
      <div className="checkbox">
        <input type="checkbox" defaultValue=".square" id="square" />
        <label htmlFor="square">Square</label>
      </div>
      <div className="checkbox">
        <input type="checkbox" id="circle" />
        <label htmlFor="circle">Circle</label>
      </div>
      <div className="checkbox">
        <input type="checkbox" id="triangle" />
        <label htmlFor="triangle">Triangle</label>
      </div>
    </FieldSet>
  )
}

const FilterBar = () => {
  return (
    <div>
      <FilterCriteria />
    </div>
  )
}

export default FilterBar
