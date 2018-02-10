import React from 'react'
import { FilterLink } from 'components'

const SingleProduct = (props) => {
  console.log(props)
  const itemId = props.match.params.id
  return (
    <div>
      SingleProduct
      <p>{itemId}</p>
    </div>
  )
}

export default SingleProduct
