import React from 'react'
import styled from 'styled-components'

const FilterBar = (props) => {
  const { filterConfig } = props
  return (
    <div className="option-set" data-group="brand">
      <input type="checkbox" id="brand-all" className="all" defaultChecked />
      <label htmlFor="brand-all">all checks</label>
      {filterConfig.map(option => (
        <div key={option.id}>
          <h3>{option.displayValue}</h3>
          {option.values.map(val => (
            <div key={val}>
              <input
                type="checkbox"
                name={option.flag}
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

export default FilterBar
