import React from 'react'
import classes from './Home.scss'
import { HomeItems } from '../utils/data'
import { Link } from 'react-router-dom'


export default class Home extends React.Component {
    render() {
        return <div className={classes.home}>
            <ul>
                {
                    HomeItems && HomeItems.map(item => {
                        return (
                            <li key={item.key}>
                                <Link to={
                                    {
                                        pathname: item.path,
                                        query: item.query,
                                    }
                                } key={item.key}>{item.name}</Link>
                            </li>

                        )
                    })
                }
            </ul>
        </div>
    }
}