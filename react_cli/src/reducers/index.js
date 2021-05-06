import { combineReducers } from 'redux'
import ReduxMiddleWare from './ReduxMiddleWare'
import Reducer1 from './reducer1'

// Connect 函数中的相关配置
export default combineReducers({
    middle: ReduxMiddleWare,
    reduver1: Reducer1,
})