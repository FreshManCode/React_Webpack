import React, { useContext } from 'react'
import classes from './ReactAppContext.scss'

/** useContext()：共享状态钩子
 * 如果需要在组件之间共享状态,可以使用useContext()
 * 本例中:有两个组件 NavBar 和 Messages,希望它们共享之间的状态
 * 
  1.使用 React Context API，在组件外部建立一个 Context。 const AppContext = React.createContext({});
  2.参照对应的组件中,使用useContext(**),获取需要共享的数据
 
 */

const AppContext = React.createContext();
export default function ReactAppContext() {
    return (
        <AppContext.Provider value={{ userName: 'UseContext哦' }}>
            <div className={classes.reactAppContext}>
                <p>下面是介绍使用UseContext的功能的哦😜,红色字体是通过使用<strong>UseContext</strong>获取的</p>
                <NavBar />
                <Messages />
            </div>
        </AppContext.Provider>
    )

}


/**
 * 组件 NavBar,使用共享数据
 */
function NavBar() {
    // 获取共享数据userName
    const { userName } = useContext(AppContext)
    // 下面是使用多个scss文件的并集
    return <div style={{ border: '1px solid red', width: '80%', margin: 'auto' }}>
        <h2 style={{ textAlign: 'center' }}>AwesomeSite</h2>
        <p className={[classes.inlineP, classes.redP].join(' ')}>{userName}</p>
    </div>
}

/**
 * 组件  Messages ,使用共享数据
 */
function Messages() {
    // 获取共享数据userName
    const { userName } = useContext(AppContext)
    return <div style={{ border: '1px solid blue', width: '80%', margin: 'auto' }}>
        <h2 style={{ textAlign: 'center' }}>Messages</h2>
        <p className={classes.inlineP}>1 message for <span className={[classes.inlineP, classes.redP].join(' ')}>{userName}</span></p>
        <p className="message">useContext is awesome!</p>
    </div>
}