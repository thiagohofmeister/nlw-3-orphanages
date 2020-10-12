import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from './views/Landing'
import OrphanagesMap from './views/OrphanagesMap'

function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Landing}/>
        <Route path='/map' component={OrphanagesMap}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
