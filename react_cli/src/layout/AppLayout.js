import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Link, BrowserRouter } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css'
import Item from 'antd/lib/list/Item'
import { Provider } from 'react-redux'



//导入组件
import Home from '../views/Home'
import About from '../views/About'
import NotFund from '../views/NotFound/404'
import LearnRedux from '../views/LearnRedux/LearnRedux'
import ReduxMiddleWare from '../views/LearnRedux/ReduxMiddleWare'
import MyLearn from '../views/Learn/Learn'
import XMLHTTP from '../views/Network/XMLHTTP'
import Axios from '../views/Network/Axios/Axios'
import Ajax from '../views/Network/Ajax/Ajax'

import { Menus } from '../utils/data'
import { Spin } from 'antd'
import MyFooter from '../components/Footer'
import ReactHook from '../views/ReactHook'
import SendSMS from '../views/Learn/SendSMS'
import NewSendSMS from '../views/Learn/NewSendSMS'
import JSFunction from '../views/JS/JSFunction'


import store from '../store/createStore'

const { Header, Content, Footer } = Layout

class AppLayout extends React.Component {


    constructor(props) {
        super(props);
    }
    render() {
        const { isMyLoading } = this.props
        console.log('isMyLoading :', isMyLoading);
        return (
            <Spin spinning={this.props.isMyLoading} wrapperClassName="page-loading">
                <div className='App'>
                    <BrowserRouter>
                        <Layout style={{ width: '100%', height: '100%', flex: 1, left: '0', right: '0' }}>
                            <Header className="header" style={{ display: 'flex', alignItems: 'center' }}>
                                <Menu style={{ flex: 1 }} theme="dark" mode="horizontal">
                                    {
                                        Menus && Menus.map(item => {
                                            return (
                                                <Menu.Item key={item.key}>
                                                    <Link to={item.path}>{item.name}</Link>
                                                </Menu.Item>
                                            )
                                        })
                                    }
                                </Menu>
                            </Header>
                            <Layout>
                                <Layout style={{ padding: '0 1px 1px' }}>
                                    {/* <Route path="/" component={Home}></Route> */}
                                    <Content className="site-layout-background" style={{ margin: 0, minHeight: '100%' }}>
                                        <Route path="/Home" component={Home}></Route>
                                        <Route path="/About" component={About}></Route>
                                        <Route path="/LearnRedux" component={LearnRedux}></Route>
                                        <Route path="/Learn" component={MyLearn}></Route>

                                        <Route path='/ReduxMiddleWare' component={ReduxMiddleWare}></Route>
                                        <Route path='/XMLHttp' component={XMLHTTP}></Route>
                                        <Route path='/Axios' component={Axios}></Route>
                                        <Route path='/Ajax' component={Ajax}></Route>
                                        <Route path='/ReactHook' component={ReactHook}></Route>
                                        <Route path='/SendSMS' component={SendSMS}></Route>
                                        <Route path='/NewSendSMS' component={NewSendSMS}></Route>
                                        <Route path='/JSFunction' component={JSFunction}></Route>


                                        {/* <Route path='/ReactAppContext' component={ReactAppContext}></Route> */}

                                        <Route path="/404" component={NotFund}></Route>
                                    </Content>

                                    {/* <Footer style={{ textAlign: 'center', height: '40px' }}></Footer> */}
                                </Layout>
                            </Layout>
                        </Layout>
                    </BrowserRouter>
                    <MyFooter />
                </div>
            </Spin>

        )
    }

}

export default AppLayout;
