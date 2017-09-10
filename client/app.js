import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

import styles from './app.sass'

ReactDOM.render(
	<BrowserRouter>
		<Routes />
  	</BrowserRouter>,
  document.getElementById('app')
)