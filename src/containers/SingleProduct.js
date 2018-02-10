import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchProducts } from 'store/actions'
import { SingleProduct } from 'components'

class SingleProductContainer extends Component {
  // componentDidMount = () => {
  //   this.props.getProductsList()
  // }
  render() {
    return <SingleProduct {...this.props} />
  }
}

const mapStateToProps = state => ({
  productsList: state.products.list,
})

const mapDispatchToProps = dispatch => ({
  getProductsList: () => dispatch(fetchProducts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleProductContainer)
