import React, { Component } from 'react'
import QrViewer from './screens/qrViewer'
import Transfer from './screens/transfer'

import { Switch, Route, /* Redirect */ } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={QrViewer} />
          <Route path='/transfer' component={Transfer} />
        </Switch>
      </div>
    )
  }
}


