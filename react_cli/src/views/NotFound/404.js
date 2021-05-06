import React from 'react'
import classes from './NotFund.scss';
import img from '../../img/404.png'

export default class NotFund extends React.Component {
    render() {
        return <div className={classes.NotFund}>
            <img src={img}/>
            <p>资源不存在哦</p>
        </div>
    }
}