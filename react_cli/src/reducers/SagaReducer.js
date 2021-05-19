//Action Creator
const increaseAction = { type: 'increase' }
const initialState = {
    userName: ''
}

const sagaReducer = (state = initialState, action) => {
    let newState = state;
    console.log('reducer1 action is:',action);
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

export default sagaReducer;

//定义ReduxMiddleWare 组件的Reducer
export function counter(state = { count: 0 }, action) {
    console.log('reducer2 action is:',action);
    const count = state.count
    switch (action.type) {
        case 'increase':
            return { count: count + 1 }
        default:
            return state
    }
}

