const initialState = {
    clickTime: 0,
    topics: [],
}


export default function counter(state = initialState, action) {
    let newState = state;
    switch (action.type) {
        case 'INCREMENT':
            newState.clickTime = action.payload.clickTime + 1;
            break;
        case 'DECREMENT':
            newState.clickTime = action.payload.clickTime - 1;
            break;
        case 'topics': {
            return {
                ...state,
                topics: action.payload.topics
            }
        }
            break;
        default:
            break;
    }
    return { ...newState }
}
