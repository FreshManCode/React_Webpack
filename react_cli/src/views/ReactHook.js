import React, { useContext } from 'react'
import classes from './ReactHook.scss'
import { Link } from 'react-router-dom'

import { UseStateButton, BottomButton } from './hooks/HookButton'
import ReactAppContext from './hooks/ReactAppContext'
import UseReducer from './hooks/UseReducer'
import UseEffect from './hooks/UseEffect'


export default class ReactHook extends React.Component {

    hookTypes = {
        'useState': <UseStateButton />,
        'useState1': <BottomButton buttonAction={this.buttonAction} />,
        'useContext': <ReactAppContext />,
        'useReducer': <UseReducer />,
        'useEffect': <UseEffect personId={1} />
    }

    buttonAction(index) {
        console.log('index is:', index);
    }


    constructor(props) {
        super(props)
        this.buttonAction = this.buttonAction.bind(this)
        console.log('ReactHook_Hook is:', props);
    }
    render() {
        const { myHook } = this.props.location.query
        return <div className={classes.reactHook}>
            <p>
                React Hooks 的意思是，组件尽量写成纯函数，如果需要外部功能和副作用，就用钩子把外部代码"钩"进来。 React Hooks 就是那些钩子。
            </p>
            <h4>
                本文介绍 React 默认提供的四个最常用的钩子。
            </h4>
            <ul>
                <li>useState()</li>
                <li>useContext()</li>
                <li>useReducer()</li>
                <li>useEffect()</li>
            </ul>
            <hr />
            <div className={classes.hookView}>
                <h2 style={{ textAlign: 'center' }}>
                    当前的钩子是: {myHook}
                </h2>
                {
                    this.hookTypes[myHook]
                }
            </div>

        </div>
    }
}




