import {OPENPAGELOADING,CLOSEPAGELOADING} from '../actions'

const initState= {
    pageLoadingVal:false,
}

const AppReducer = (state = initState,action)=>{
    console.log('AppReducer:',state, "action is:", action);
    switch(action.type) {
        case OPENPAGELOADING:{
            return  {
                pageLoadingVal:true,
            }
        }
        case CLOSEPAGELOADING:{
            return  {
                pageLoadingVal:false,
            }
        }
        default: {
            return state
        }
    }
}

export default AppReducer