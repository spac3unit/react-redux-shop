import React from 'react'
import { FilterLink } from 'components'

const SingleProduct = (props) => {
  console.log(props)
  const { id } = props.match.params
  return (
    <div>
      SingleProduct
      <p>{id}</p>
    </div>
  )
}

export default SingleProduct
