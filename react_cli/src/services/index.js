import { resolve } from 'core-js/fn/promise'
import $ from 'jquery'
const cnode = {
    tpoics: 'https://cnodejs.org/api/v1/topics',
    topic: 'https://cnodejs.org/api/v1/topic/:id',
    collected: 'https://cnodejs.org/api/v1/topic_collect/:name'
}

export const topics = (params = {})=>{
    return new Promise((resolve,reject)=>{
        $.get(code.topics,params,res=>{
            resolve(res);
        })
    })
}