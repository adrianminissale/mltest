import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Index from './components/index'
import Results from './components/results'
import Detail from './components/detail'

const Routes = () => (
	<Switch>
		<Route exact path="/" component={Index} />
		<Route exact path="/items" component={Results} />
		<Route path="/items/*" component={Detail} />
	</Switch>
);

export default Routes