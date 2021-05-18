import axios from 'axios'
import { message } from 'antd'
import store from '../store/createStore'
import { OPENPAGELOADING, CLOSEPAGELOADING } from '../actions'

let instance = axios.create({
    baseURL: '',
    timeout: 10000
})

// 请求拦截
instance.interceptors.request.use(config => {
    store.dispatch({ type: OPENPAGELOADING })
    return config
}, err => {
    store.dispatch({ type: CLOSEPAGELOADING })
    message.error('请求超时')
    return Promise.reject(err)
})

instance.interceptors.response.use(res => {
    store.dispatch({ type: CLOSEPAGELOADING })
    let { data } = response
    if (data && data.code && data.code === 200) {
        return data
    } else if (data && data.code && data.code === 500) {
        message.error(data.msg || '获取接口异常')
        return Promise.reject()
    }
}, err => {
    store.dispatch({ type: CLOSEPAGELOADING })
    message.error('服务错误')
    return Promise.reject(error)
})

export default instance