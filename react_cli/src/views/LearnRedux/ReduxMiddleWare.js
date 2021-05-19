import { Alert } from 'antd';
import React from 'react';
import style from './ReduxMiddleWare.scss';

import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger'
// 引入connect函数
import { connect } from 'react-redux'
import Header from '../../components/Header'



/*中间件的概念:
(1):reducer:纯函数,只承担计算state的功能,不适合承担其他功能,也承担不了,因为理论上,穿函数不能进行读写操作
(2):View与State一一对应,可以看错State的视觉层,也不适合承担其他功能
(3):Action:存放数据的对象,即消息的载体,只能被别人操作,自己不能进行任何操作.

想来想去,只有发送Action的这个步骤,即store.dispatch()方法,可以添加功能.
中间件就是一个函数,对store.dispatch方法进行了改造,在发出Action和执行Reducer这两步之间,添加了其他功能.

*/

const logger = createLogger();
// 使用中间件扩展功能
// 将它放在applyMiddleware方法之中，传入createStore方法，就完成了store.dispatch()的功能增强。

/*注意:
1.createStore 方法可以接受整个应用的初始状态作为参数,那样的话,applyMiddleware就是第三个参数了.
2.中间件的次序有讲究。

四:异步操作的基本思路:
同步操作只要发出一种Action即可,异步操作的差别是它要发出三种Action

>.操作发起的Action
>.操作成功的Action
>.操作失败的Action

以向服务器取出数据为例，三种 Action 可以有两种不同的写法。
// 写法一：名称相同，参数不同
{ type: 'FETCH_POSTS' }
{ type: 'FETCH_POSTS', status: 'error', error: 'Oops' }
{ type: 'FETCH_POSTS', status: 'success', response: { ... } }

// 写法二：名称不同
{ type: 'FETCH_POSTS_REQUEST' }
{ type: 'FETCH_POSTS_FAILURE', error: 'Oops' }
{ type: 'FETCH_POSTS_SUCCESS', response: { ... } }

除了 Action 种类不同，异步操作的 State 也要进行改造，反映不同的操作状态。下面是 State 的一个例子。
let state = {
  // ... 
  isFetching: true,
  didInvalidate: true,
  lastUpdated: 'xxxxxxx'
};

上面代码中，State 的属性isFetching表示是否在抓取数据。didInvalidate表示数据是否过时，lastUpdated表示上一次更新时间。

现在，整个异步操作的思路就很清楚了。

操作开始时，送出一个 Action，触发 State 更新为"正在操作"状态，View 重新渲染
操作结束后，再送出一个 Action，触发 State 更新为"操作结束"状态，View 再一次重新渲染

 */

// const store = createStore(
//     reducer,
//     applyMiddleware(logger)
// );


// 生成store对象
// export const store = createStore(counter)

// // 使用connect方法生成容器组件
// const App = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(ReduxMiddleWare)




class ReduxMiddleWare extends React.Component {
    constructor(props) {
        super(props)
    }

    onIncreaseClick = () => {
        this.props.dispatch({ type: "INCREMENT", payload: { clickTime: this.props.reducer.clickTime } })
    }

    decrementClick = () => {
        this.props.dispatch({ type: "DECREMENT", payload: { clickTime: this.props.reducer.clickTime } })
    }

    testSaga = () => {
        this.props.dispatch({ type: "TEST_FETECHUSER", payload: { userName: 'SAGA传递的哦' } })
    }


    render() {

        const { reducer } = this.props
        console.log('props:', this.props);

        return (
            <div className={style.ReduxMiddleWare}>
                <Header />
                <h3>计时器实例</h3>
                <span>
                    {this.props.reducer.clickTime}
                </span>
                <div className={style.gap}>
                    <button onClick={this.onIncreaseClick}>Increase</button>
                </div>
                <div className={style.gap}>
                    <button onClick={this.decrementClick}>Decrement</button>
                </div>
                <div className={style.gap}>
                    <button onClick={this.testSaga}>Saga</button>
                    <span>{this.props.sagaReucer.userName}</span>
                </div>


            </div>
        )
    }
}

// 对reducers中的函数进行关联
const mapStateToProps = state => ({
    reducer: state.middle,
    sagaReucer:state.sagaReucer,
    Axios: state.Axios,
});

export default connect(mapStateToProps)(ReduxMiddleWare)