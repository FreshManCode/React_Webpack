import React, { useContext, useState, useImperativeHandle, useEffect } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import style from './MySendSMS.scss'

export const AppContext = React.createContext();

const MaxTime = 60;
var start = false;
var tempTime = MaxTime;
export default function MySendSMS(props) {

    useEffect(() => {
        // didmount使用
        console.log(111)
        return () => {
            // unmount 时调用
            clearTimer();
            console.log(222)
        }
    }, [])

    //  使用  useImperativeHandle 与组件进行绑定
    useImperativeHandle(props.cRef, () => ({
        // timeDownAction 就是暴露给父组件的方法
        timeDownAction: startTimeDown,
    }));

    const { sendAction } = props;
    var [currentTime, setCurrentTime] = useState(0);
    let timer;

    function startTimeDown() {
        if (currentTime > 0) { return; }
        start = true;
        if (start) {
            timer = setInterval(() => {
                if (tempTime > 0) {
                    tempTime = tempTime - 1;
                    setCurrentTime(tempTime)
                } else {
                    clearTimer();
                }
            }, 1000);
        } else {
            clearTimer();
        }

    }

    function clearTimer() {
        if (timer) {
            clearInterval(timer);
            tempTime = MaxTime;
            start = false;
        }
    }

    return <div className={style.sendsms}>
        {currentTime === 0
            ? <Button size='small' className={style.send} onClick={sendAction && sendAction}>{'获取短信'}</Button>
            : <Button size='small' disabled className={style.count}>重新获取短信（{currentTime}秒后）</Button>
        }
    </div>




}