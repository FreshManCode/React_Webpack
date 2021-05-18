import React from 'react'
import { ListURL } from '../../utils/data'
import style from './XMLHTTP.scss'
import { Button, List, Row, Spin } from 'antd'
import { createStore } from 'redux'
import reducer from '../../reducers/XMLHttp'
import { connect } from 'react-redux'

import { OPENPAGELOADING, CLOSEPAGELOADING } from '../../actions'

 class XMLHTTP extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: [],
            loading: false,
        }
    }

    sendNetworkReq = (current) => {
        
        this.props.dispatch({ type: OPENPAGELOADING })
        const Http = new XMLHttpRequest();
        Http.open('Get', ListURL);
        Http.send();
        // 该onreadystatechange有两个方法，readyState 和 status允许我们可以检查请求的状态。
        // 如果readyState等于4，则表示请求已完成。 除了使用JavaScript直接进行Ajax调用之外，还有其他更强大的HTTP调用方法，例如$.AjaxjQuery方法。
        Http.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                let responseString = Http.responseText
                let resList = JSON.parse(responseString)
                current.setState({
                    list: resList,
                })
                console.log("type:", typeof (resList), 'list:', resList);
                current.props.dispatch({ type: CLOSEPAGELOADING })
            }
        }
    }

    render() {
        console.log('this.state.list:', this.state.list.length);
        return (
            <div className={style.xmlHTTP} >
                <div className={style.action}>
                    <Button onClick={() => { this.sendNetworkReq(this) }}>点我开启网络请求</Button>
                </div>
                <List className={style.list}>
                    {this.state.list.map((item, index) => {
                        return <Row key={item.title}>{index} : {item.title}</Row>
                    })}
                </List>
            </div>
        )
    }

}


// 对reducers中的函数进行关联
const mapStateToProps = state => ({
    XMLHttp: state.XMLHttp,
});

export default connect(mapStateToProps)(XMLHTTP)