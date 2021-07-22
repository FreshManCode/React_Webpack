import React from 'react'
import PropTypes from 'prop-types'
import { createStore } from 'redux'
import {counter} from '../../reducers/SagaReducer'
import style from './LearnRedux.scss'
// import { one, two } from './Test'

// 使用Redux来简单实现dispatch发送与view更新
// 1.创建store
const store = createStore(counter)

export default class LearnRedux extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            clickTimes: store.getState()
        }
        this.incrementAsync = this.incrementAsync.bind(this)
        this.incrementIfOdd = this.incrementIfOdd.bind(this)
        //2. 添加监听
        store.subscribe(() => {
            this.setState({
                clickTimes: store.getState()
            })
            console.log('111:', store.getState());
        })
    }


    two = async()=> {
        for (var index = 0; index < 100; index++) {
            console.log('asyc1 index is:', index)
        }
        console.log('22222')
        console.log('33333')
        for (var index = 0; index < 100; index++) {
            console.log('asyc2 index is:', index)
        }
        console.log('4444')
        
    }
    one = ()=> {
        for (var index = 0; index < 1000; index++) {
            console.log('index is:', index)
        }
    }
    

    test = () => {
        this.two()
        this.one()
    }

    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
            this.onIncrement()
        }
    }

    // 3.view触发action操作
    onIncrement = () => {
        console.log('onIncrement');
        // 发送action
        store.dispatch({ type: 'INCREMENT' })
    }

    onDecrement = () => {
        console.log('onDecrement');
        store.dispatch({ type: 'DECREMENT' })
    }

    incrementAsync() {
        setTimeout(() => {
            this.onIncrement()
        }, 1000);
    }

    render() {
        return (
            <div className={style.learnRedux}>
                Clicked: {this.state.clickTimes} times
                <div className={style.smallButton}>
                    <button onClick={this.onIncrement}> + </button>
                    <button onClick={this.onDecrement}> - </button>
                    <button onClick={this.test}> test </button>
                </div>
                <div className={style.largeButton}>
                    <button onClick={this.incrementIfOdd}>
                        Increment if odd
                </button>
                    <button onClick={this.incrementAsync}>
                        Increment async
                </button>
                </div>

            </div>
        )
    }
}


LearnRedux.protoTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}
