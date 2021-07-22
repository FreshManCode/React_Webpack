import React, { useState } from 'react'
import {Button} from 'antd'


// 你需要什么功能，就使用什么钩子。React 默认提供了一些常用钩子，你也可以封装自己的钩子。

// 所有的钩子都是为函数引入外部功能，所以 React 约定，钩子一律使用use前缀命名，便于识别。你要使用 xxx 功能，钩子就命名为 usexxx。


// useState 用于为函数组件引入状态(state).穿函数不能有状态,所以把状态放在钩子里面.
// 本文的事例,用户点击按钮,会导致按钮的文字改变,文字取决于用户是否点击,这就是状态.使用useState实现如下:

// useState() 这个函数接受状态的初始值,作为参数,该例的初始值为按钮的文字.该函数返回一个数组,数组的第一个成员是一个变量(本例是:buttonText)
// 指向状态的当前值.第二个成员是一个函数,用来更新状态,约定是set前缀加上状态的变量名(本例就是setButtonText)

export function UseStateButton(props) {
    const initialValue = props.count ? Number(props.count) : 0
    const [buttonText, setButtonText] = useState( initialValue );
    function handlePlusClick() {
        const result = buttonText + 1;
        return setButtonText( result );
    }

    function handleSubtractClick() {
        const result = buttonText - 1;
        return setButtonText( result );
    }

    return <div style={{ display: 'flex', justifyContent: "space-around", flexDirection: 'row' }}>
        <button onClick={handlePlusClick}>{'+'}</button>
        <p>我点击的次数:{buttonText}</p>
        <button onClick={handleSubtractClick}>{'-'}</button>
    </div>
}

export function BottomButton(props) {
    const {titles=['取消','确定'],buttonAction} = props
    function cancalAction () {
        console.log('cancalAction:',buttonAction ? '1':"0");
        buttonAction && buttonAction (0)
    }

    function okAction() {
        buttonAction && buttonAction (1)
    }
    
    return <div style={{ display: 'flex', justifyContent: "space-around", flexDirection: 'row' }}>
        <Button onClick={cancalAction} style={{width:"100px"}}>{titles[0]}</Button>
        <Button onClick={okAction} style={{width:"100px"}}>{titles[1]}</Button>
    </div>
}