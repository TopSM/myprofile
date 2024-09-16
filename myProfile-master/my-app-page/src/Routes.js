import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Main from './Main'
import Gallery from './Gallery'
import Booking from './Booking'

export default () => (
    <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/Resume" component={Main} />
        <Route path="/Gallery" component={Gallery} />
        {/* <Route path="/Booking" component={Booking} /> */}
    </Switch>
);