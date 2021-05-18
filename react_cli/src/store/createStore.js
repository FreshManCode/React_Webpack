import {applyMiddleware,compose,createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../saga'

export default function configureStore(preloadedState) {
    // 创建saga中间件
    const sagaMiddleware = createSagaMiddleware();
    const middleWares = [sagaMiddleware];
    const middlewareEnhancer = applyMiddleware(...middleWares);

    const enhancers = [middlewareEnhancer];
    const composedEnhancers = compose(...enhancers);

    //创建存储容器 (createStore 接受Reducer作为参数,生成一个新的Store.以后每当store.dispatch发送过来一个新的Action.
    // 就会自动调用Reducer,得到新的State)
    const store = createStore(rootReducer,preloadedState,composedEnhancers);
    // 配置saga
    sagaMiddleware.run(rootSaga);
    return store;

}