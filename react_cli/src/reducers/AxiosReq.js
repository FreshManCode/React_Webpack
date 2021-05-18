import axios from 'axios';
import { AxiosURL } from '../utils/data';

const initState = {
    res:{},
    error:{},
}

const AxiosReducer = (state = initState, action) => {
    let newState = state;
    console.log('AxiosReducer:', state, "action is:", action);
    switch (action.type) {
        case "AXIOS_REQUEST_SUCCESS": {
            newState.res = action.res            
        }
        case "AXIOS_REQUEST_FAIL": {
            newState.error = action.error
        }
    }
    return  {...newState}
}

export default AxiosReducer