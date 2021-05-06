import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Link, BrowserRouter } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css'
import Item from 'antd/lib/list/Item'
import { Provider } from 'react-redux'



//导入组件
import Home from './src/views/Home'
import About from './src/views/About'
import NotFund from './src/views/NotFound/404'
import LearnRedux from './src/views/LearnRedux/LearnRedux'
import ReduxMiddleWare from './src/views/LearnRedux/ReduxMiddleWare'
import MyLearn from './src/views/Learn/Learn'
import { store } from './src/views/LearnRedux/ReduxMiddleWare'

import { Menus } from './src/utils/data'

const { Header, Content, Footer } = Layout


import createStore from './src/store/createStore';
import AppContainer from './src/container/AppContainer'

const myStore = createStore();


// ReactDOM.render(
//   <BrowserRouter>
//     <Layout style={{ width: '100vw', height: '100%', flex: 1 }}>
//       <Header className="header" style={{ display: 'flex', alignItems: 'center' }}>
//         <Menu style={{ flex: 1 }} theme="dark" mode="horizontal">
//           {
//             Menus && Menus.map(item => {
//               return (
//                 <Menu.Item key={item.key}>
//                   <Link to={item.path}>{item.name}</Link>
//                 </Menu.Item>
//               )
//             })
//           }
//         </Menu>
//       </Header>
//       <Layout>
//         <Layout style={{ padding: '0 24px 24px' }}>
//           <Content className="site-layout-background" style={{ margin: 0, minHeight: 280, }}>
//             <Route path="/Home" component={Home}></Route>
//             <Route path="/About" component={About}></Route>
//             <Route path="/LearnRedux" component={LearnRedux}></Route>
//             <Route path="/Learn" component={MyLearn}></Route>

//             <Route path='/ReduxMiddleWare' component={ReduxMiddleWare}></Route>
//             <Route path="/404" component={NotFund}></Route>

//           </Content>

//           <Footer style={{ textAlign: 'center' }}>webpack—react-cli</Footer>
//         </Layout>
//       </Layout>
//     </Layout>
//   </BrowserRouter>,
//   document.getElementById('myapp')
// )


ReactDOM.render(
  <AppContainer store={myStore}/>,
  document.getElementById('myapp')
)


