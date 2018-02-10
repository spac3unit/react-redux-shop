import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchProducts } from 'store/actions'
import { ProductsList } from 'components'

class ProductsListContainer extends Component {
  // componentDidMount = () => {
  //   this.props.getProductsList()
  // }
  render() {
    return <ProductsList {...this.props} />
  }
}

const mapStateToProps = state => ({
  productsList: state.products.list,
})

const mapDispatchToProps = dispatch => ({
  getProductsList: () => dispatch(fetchProducts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsListContainer)
