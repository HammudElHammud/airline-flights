import { combineReducers } from 'redux';
import App from './App.reducer'
import User from './User.reducer'


export default combineReducers({
	App,
	User,
})

