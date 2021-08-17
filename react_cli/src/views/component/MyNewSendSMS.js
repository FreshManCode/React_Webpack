import React from 'react'
import { Button } from 'antd'
import style from './MyNewSendSMS.scss'

const MaxTime = 60;

export default class MyNewSendSMS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: 0,
        }
        this.countDown = this.countDown.bind(this)
        this.buttonAction = this.buttonAction.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        const { start } = nextProps;
        // 开启倒计时
        if (start) {
            this.countDown();
        }
    }

    countDown = (values) => { // 点击按钮先开始倒计时，响应不成功清空
        this.setState({
            currentTime: MaxTime
        })
        const { sendAction } = this.props
        this.Timer = setInterval(() => {
            if (this.state.currentTime > 0) {
                this.setState({
                    currentTime: this.state.currentTime - 1
                })
            } else {
                // 回调给父组件重新刷新按钮状态
                sendAction && sendAction(true);
                clearInterval(this.Timer);
            }
        }, 1000)
    }

    buttonAction=()=>{
        this.props.sendAction && this.props.sendAction();
    }

    render() {
        const { sendAction } = this.props;
        const { currentTime } = this.state;
        return (
            <div className={style.sendsms}>
                {currentTime === 0
                    ? <Button size='small' className={style.send} onClick={this.buttonAction}>{'获取短信'}</Button>
                    : <Button size='small' disabled className={style.count}>重新获取短信（{currentTime}秒后）</Button>
                }
            </div>
        )
    }
}
