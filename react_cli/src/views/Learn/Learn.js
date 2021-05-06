import React from 'react'
import { LearnItems } from '../../utils/data'
import { Link } from 'react-router-dom'
import style from './Learn.scss'

export default class Learn extends React.Component {
    render() {
        return (
            <div className={style.Learn} >
                <ul>
                    {
                        LearnItems && LearnItems.map(item => {
                            return (
                                <li key={item.key}>
                                    <Link to={item.path} key={item.key}>{item.name}</Link>
                                </li>

                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}