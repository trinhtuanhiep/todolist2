import { combineReducers } from 'redux'

import studentReducer from './studentReducer'
import uploadReducer from './uploadreducer'

export default combineReducers({
    student: studentReducer,
    upload: uploadReducer
})