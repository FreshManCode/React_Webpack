import React, { useReducer } from 'react'
import classes from './UseReducer.scss'

/** useReducer()：action 钩子
 * React 本身不提供状态管理功能，通常需要使用外部库。这方面最常用的库是 Redux。
 
 * Redux 的核心概念是，组件发出 action 与状态管理器通信。状态管理器收到 action 以后，使用 Reducer 函数算出新的状态，
   Reducer 函数的形式是(state, action) => newState。

 * useReducers()钩子用来引入 Reducer 功能。
   const [state, dispatch] = useReducer(reducer, initialState);
   
   这是useReducer()的基本用法,它接受Reducer函数和状态的初始值作为参数,返回一个数组.
   数组的第一个成员是状态的当前值，第二个成员是发送 action 的dispatch函数.

 */

const myReduer = (state, action) => {
    switch (action.type) {
        case ('countUp'):
            return {
                ...state,
                count: state.count + 1
            }
        default:
            return state
    }
}

// 计数器实例

export default function UseReducer() {
    // useReducers()钩子用来引入 Reducer 功能。
    const [state, dispatch] = useReducer(myReduer, { count: 0 });
    return (
        <div className={classes.useReducer}>
            <button onClick={() => dispatch({ type: 'countUp' })}>
                +1
            </button>
            <p>Count: {state.count}</p>
        </div>
    )
}