import React from 'react';
import style from './User.scss';
import bg from '../../img/bg.png';
import avatar from '../../img/avatar.png';


export default class UserItem extends React.Component {



    render() {
        const {name,id,title,didClick} = this.props
        return (
            <div className={style.userItem}>
                <div className={style.container} onClick={didClick && didClick }>
                    <img className={style.bgImg} src={bg}></img>
                    <span className={style.logo}>
                        <img src={avatar} />
                    </span>
                    <span className={style.name}>
                        姓名:{name}
                    </span>
                    <span className={style.catid}>
                        编号:{id}
                    </span>
                    <span className={style.content}>
                        {title}
                    </span>
                </div>

            </div>)
    }

}

