import React from 'react'
import style from './Footer.scss'

export default class MyFooter extends React.Component {

    render() {
        return (<div className={style.footer}>
            <span className={style.text}>Footer啊Footer</span>
        </div>)
    }


}