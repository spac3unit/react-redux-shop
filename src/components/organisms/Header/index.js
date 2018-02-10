import React from 'react'
import styled from 'styled-components'

import { Icon, Link, List, Block } from 'components'

const Wrapper = styled(Block.withComponent('header'))`
  border: 1px solid black;

  padding: 1rem;
  @media screen and (min-width: 768px) {
    background: red;
    color: papayawhip;
  }
  @media (min-width: 1024px) {
    background: mediumseagreen;
    color: papayawhip;
  }
`
const StyledList = styled(List)`
  list-style-type: none;
  & li {
    display: inline-block;
    margin-right: 20px;
  }
`

const Header = () => {
  return (
    <Wrapper>
      <StyledList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="products">Products</Link>
        </li>
      </StyledList>
    </Wrapper>
  )
}

export default Header
