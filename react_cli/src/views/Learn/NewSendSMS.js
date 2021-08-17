import React from 'react'
import MyNewSendSMS from '../component/MyNewSendSMS'
import { Spin } from 'antd'
import style from './NewSendSMS.scss'

export default class NewSendSMS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: false,
            loading: false,
        }
        this.myButtonAction = this.myButtonAction.bind(this)
    }

    myButtonAction(timeFinish = false) {
        console.log('11111');
        if (timeFinish) {
            this.setState({
                start: false,
            })
            return;
        }
        this.setState({
            loading: true,
        })
        setTimeout(() => {
            this.setState({
                start: true,
                loading: false,
            })

        }, 1500);
    }
    render() {
        return (
            <Spin spinning={this.state.loading} size="large">
                <div className={style.newSendSMS}>
                    <MyNewSendSMS start={this.state.start} sendAction={this.myButtonAction} />
                </div>
            </Spin>
        )
    }


}
