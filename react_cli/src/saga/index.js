import { put, all, fork, takeEvery, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import Axios from '../utils/http'
import { AxiosURL } from '../utils/data'
import axios from 'axios';
import {OPENPAGELOADING,CLOSEPAGELOADING} from '../actions'


export function axiosSuccessPOST(data) {
    return {
        type: "AXIOS_REQUEST_SUCCESS",
        res:data,
    }
}

export function* fetchUser() {
    console.log('fetchUser');
    yield delay(1000);
    yield put({ type: 'GET_USER' })
}

export function* fetchProject() {
    console.log('fetchProject');
    yield delay(1000);
    yield put({ type: 'GET_PROJECT' })
}


export function* fetchMockUserList() {
    console.log('fetchProject');
    yield delay(1000);
    yield put({ type: 'GET_PROJECT' })
}

export function* axiosRequest() {
    yield put({type:OPENPAGELOADING})
    // const result = yield put({type:"AXIOS_REQUEST_INIT"})
    // console.log('result is:',result)
    try {
        const response = yield call(fetch,AxiosURL)
        const json = yield call([response,response.json])
        console.log("call res json :",json,"response is:",response)
        yield put({type:CLOSEPAGELOADING})
        yield put(axiosSuccessPOST(json))
    } catch (error) {
        yield put({type:CLOSEPAGELOADING})
        yield put({type:"AXIOS_REQUEST_FAIL",error})
        
    }
    
    // yield put({type:CLOSEPAGELOADING})
    // console.log('axiosRequest');
    // try {
    //     let res = await axios.get(AxiosURL);
    //     console.log('Request success:',res)
    //     return await res.json();
    // } catch (error) {
    //     console.log('Request Failed:',error)
    // }
    // axios.get(AxiosURL)
    //     .then(function (res) {
    //         console.log('res is:', res);
    //     }).catch(function (error) {
    //         console.log('error is:', error);
    //     })
}



export default function* rootSaga() {
    // 添加异步的观察通知,当有 'TEST_FETECHUSER'Type 发送时会调用fetchUser saga函数
    yield takeEvery('TEST_FETECHUSER', fetchUser)
    yield takeEvery('TEST_FETECHPROJECT', fetchProject)
    yield takeEvery('AXIOS_REQUEST', axiosRequest)
}