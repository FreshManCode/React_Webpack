import React from 'react';
import style from './Axios.scss';
import { connect } from 'react-redux'
import { Button } from 'antd';
import UserItem from '../../../components/User/User'
import _ from 'lodash'


 

class Axios extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loadComponent: true,
        }
    }


    componentDidMount() {
        console.log('1111');
    }

    unloadComponent = () => {
        this.setState({
            loadComponent:!this.state.loadComponent
        })
    }

    axiosRequest = () => {
        this.props.dispatch({ type: "AXIOS_REQUEST" })
    }

    didClick = (item, index) => {
        console.log("item is:", item, 'index is:', index)
    }
    render() {
        // 不渲染组件
        if (!this.state.loadComponent) {
            return null
        }
        const {Axios} = this.props
        console.log("Axios result is:", Axios)
        const data = _.get(this.props, 'Axios.res.result')
        return (

            <div className={style.axios}>
                {
                    data && data.length > 0 && data.map((item, index) => {
                        return <UserItem
                            key={index}
                            name={item.username}
                            id={item.aid}
                            title={item.title}
                            didClick={() => { this.didClick(item, index) }} />
                    })
                }
                <Button className={style.centerButton} onClick={this.axiosRequest}>
                    AxiosRequest
                </Button>
                <Button className={style.centerButton} onClick={this.unloadComponent}>
                    不渲染组件
                </Button>

            </div>
        )
    }

}

// 对reducers中的函数进行关联
const mapStateToProps = state => ({
    Axios: state.Axios
});

export default connect(mapStateToProps)(Axios)