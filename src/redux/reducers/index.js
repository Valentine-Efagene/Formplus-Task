import { combineReducers } from 'redux'

import dataReducer from '../slice/dataSlice'

export default combineReducers({
  data: dataReducer,
})
