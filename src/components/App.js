import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import styledNormalize from 'styled-normalize'

import { HomePage, SingleProduct } from 'components'

// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default'

injectGlobal`
${styledNormalize}
  body {
    margin: 0px;
  },
  * {
    box-sizing: border-box;
  }
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/products" component={SingleProduct} exact />
        <Route path="/products/:id" component={SingleProduct} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
