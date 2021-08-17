import React, { useState,useRef } from 'react'
import { Link } from 'react-router-dom'
import style from './SendSMS.scss'
import MySendSMS, { AppContext } from '../component/MySendSMS'

export default function SendSMS(props) {
    // 与子组件进行绑定
    const childRef = useRef();
    const [beginTimeDown, setBeginTimeDown] = useState(false);
    function getSmsCode() {
        setTimeout(() => {
            childRef.current.timeDownAction();
        }, 1000);
    }
    return <AppContext.Provider value={{ needTimeDown: beginTimeDown }}>
        <div className={style.sendSMS}>
            <MySendSMS sendAction={getSmsCode} cRef = {childRef} />
        </div>
    </AppContext.Provider>
}