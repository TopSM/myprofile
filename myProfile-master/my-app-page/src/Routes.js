import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Main from './Main'
import Gallery from './Construction'

export default () => (
    <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/Resume" component={Main} />
        <Route path="/Gallery" component={Gallery} />
    </Switch>
);