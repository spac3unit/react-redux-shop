import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon, Link } from 'components'

const fontSize = ({ height }) => (height ? `${height / 3 / 16}rem` : '0.75em')

const margin = ({ hasText, right }) => {
  if (hasText) {
    return right ? '0 0 0 0.25em' : '0 0.25em 0 0'
  }
  return 0
}

const Text = styled.span`
  @media screen and (max-width: 420px) {
    display: ${({ responsive }) => responsive && 'none'};
  }
`

const FilterLink = ({ filter, children, ...props }) => {
  return (
    <Link {...props}>
      <Text>{children}</Text>
    </Link>
  )
}

FilterLink.propTypes = {
  //   icon: PropTypes.string.isRequired,
  //   height: PropTypes.number,
  //   palette: PropTypes.string,
  //   reverse: PropTypes.bool,
  //   responsive: PropTypes.bool,
  //   right: PropTypes.bool,
  //   children: PropTypes.node,
}

export default FilterLink
