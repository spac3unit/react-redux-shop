import React, { Component } from 'react'
import styled from 'styled-components'

import { FilterLink } from 'components'
import { List, Block } from 'components'
import Link from 'react-router-dom/Link'

const StyledProductsList = styled(List)`
  list-style-type: none;
  & li {
    display: inline-block;
    margin-right: 20px;
  }
`
const ProductLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: black;
  &:visited {
    color: black;
  }
`
class ProductsList extends Component {
  componentDidMount = () => {
    this.props.getProductsList()
  }

  render() {
    const list = this.props.productsList
    console.log(this.props)

    return (
      <StyledProductsList>
        {list.length > 0
          ? list.map(item => (
            <li key={item.id}>
              <ProductLink to={`/products/${item.id}`}>
                <img src={item.imageUrl} />
                <p>{item.name}</p>
                <p>${item.price}</p>
              </ProductLink>
            </li>
            ))
          : 'Loading'}
      </StyledProductsList>
    )
  }
}

export default ProductsList
