import { combineReducers } from 'redux'

import ReduxMiddleWare from './ReduxMiddleWare'
import SagaReucer from './SagaReducer'
import XMLHttp from './XMLHttp'
import Axios from './AxiosReq'

// Redux 提供了一个combineReducers方法,用于Reducer的拆分,你只要定义各个子Reducer函数,然后用这个方法,将它们合成一个大的Reducer.
//combineReducers() 函数就是产生一个整体的Reducer函数.该函数根据State的key去执行相应的子Reducer,
//并将返回结果合并成一个大的State对象 
// Connect 函数中的相关配置
export default combineReducers({
    sagaReucer: SagaReucer,
    middle: ReduxMiddleWare,
    XMLHttp:XMLHttp,
    Axios:Axios,
})

