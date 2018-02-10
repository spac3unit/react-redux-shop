// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import { FilterLink, Header } from 'components'
import { ProductsList, FilterBar } from 'containers'

const HomePage = () => {
  return (
    <div className="HomePage">
      <Header />
      <FilterBar />
      <ProductsList />
    </div>
  )
}

export default HomePage
