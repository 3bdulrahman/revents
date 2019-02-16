import {combineReducers} from 'redux';
import eventReducer from '../../features/event/eventReducer'
import {reducer as FormReducer} from 'redux-form'
import testReducer from '../reducers/test'

const rootReducer = combineReducers({
     test:testReducer,
     events:eventReducer,
     form:FormReducer
})

export default rootReducer;