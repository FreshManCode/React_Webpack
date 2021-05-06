import React from 'react'
import goBackIcon from '../../img/icon_back@3x.png'
import style from './Header.scss'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Header extends React.Component {

    static contextTypes = {
        router: PropTypes.object
    }

    goBack = () => {
        console.log('111:',this.props);
        this.props.history.goBack()
    }

    render() {
        const { goBack = this.goBack } = this.props
        return (
            <div className={style.header}>
                <div className={style.goBack}>
                    <img src={goBackIcon} onClick={goBack}></img>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)