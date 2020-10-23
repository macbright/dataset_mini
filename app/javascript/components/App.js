import React from 'react'
import { Route, Switch} from 'react-router-dom'
import DataUpload from './dataset/DataUpload'
import Dataset from './dataset/Dataset'
import SelectColumns from './dataset/SelectColumns'
import Header from './header/header';
import ConfirmDetails from './dataset/confirmDetails';


const App = () => {
	
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={DataUpload} />
				<Route exact path='/datasets' component={Dataset} />
				<Route exact path='/confirm_details' component={ConfirmDetails} />
				<Route exact path='/adjust_settings' component={SelectColumns} />
			</Switch>
		</div>
	)
}

export default App;