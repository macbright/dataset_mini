import React from 'react'
import { Route, Switch} from 'react-router-dom'
import DataUpload from './dataset/DataUpload'
import Dataset from './dataset/Dataset'
import SelectColumns from './dataset/SelectColumns'
 
const App = () => {
	return (
		<Switch>
			<Route exact path='/' component={DataUpload} />
			<Route exact path='/datasets' component={Dataset} />
			<Route exact path='/adjust_settings' component={SelectColumns} />
		</Switch>
	)
}

export default App;