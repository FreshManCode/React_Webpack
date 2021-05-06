import { takeEvery } from 'redux-saga'
import { fetchUser } from '../saga/index'
//Action Creator
const increaseAction = { type: 'increase' }
const initialState = {
    userName: ''
}

export default (state = initialState, action) => {
    let newState = state;
    console.log('action is:',action);
    switch (action.type) {
        case 'GET_USER':
            newState.userName = "GET_USER_GET_USER"
            console.log('GET_USER_GET_USER',newState);
            break;
        case 'INCREMENT':
            console.log('INCREMENT');
            return state + 1
        case 'DECREMENT':
            console.log('DECREMENT');
            return state - 1
        default:
            console.log('NORMAL');
            return state
    }
    return { ...newState }
}


//定义ReduxMiddleWare 组件的Reducer
export function counter(state = { count: 0 }, action) {
    const count = state.count
    switch (action.type) {
        case 'increase':
            return { count: count + 1 }
        default:
            return state
    }
}

