import React, { useEffect, useState } from 'react'
import classes from './UseEffect.scss'
import { Spin } from 'antd'

/**
 * useEffect()用来引入具有副作用的操作，最常见的就是向服务器请求数据。以前，放在componentDidMount里面的代码，
   现在可以放在useEffect()。
 * useEffect()的用法如下。

    useEffect(()  =>  {
    // Async Action
    }, [dependencies])
 
* 该方法中,useEffect()接受两个参数,第一个参数是一个函数,异步操作的代码放在里面.第二个参数是一个数组,用于给Effect 的依赖项，
只要这个数组发生变化,useEffect()就会执行。第二个参数可以省略，这时每次组件渲染时，就会执行useEffect()。

 */

export default function MyPerson(props) {
    
    const { personId = 1 } = props;
    const URL = `https://swapi.co/api/people/${personId}`
    // const URL = `https://www.baidu.com`
    const [loading, setLoading] = useState(true);
    const [person, setPerson] = useState({});

    useEffect(() => {
        setLoading(true);
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                console.log('data is:',data);
                setPerson(data);
                setLoading(false);
            });

    }, [personId])

    // if (loading === true) {
    //     return <p style={{ textAlign: 'center' }}>Loading...</p>
    // }
    return <Spin spinning={loading}>
        <div>
            <p>You're viewing: {person.name}</p>
            <p>Height: {person.height}</p>
            <p>Mass: {person.mass}</p>
        </div>
    </Spin>
}