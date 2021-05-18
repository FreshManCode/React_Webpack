import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import logger from "redux-logger";
import AppLayout from "../layout/AppLayout";

class AppContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        const { store } = this.props
        console.log('myStore is:', store);
        store.subscribe(() => {
            let storeState = store.getState()
            this.setState({
                loading: storeState.pageLoadingVal
            })
        })
    }



    render() {
        const { store } = this.props;
        console.log('AppContainer store is:',store,'||:',store.getState(),'value :',store.getState().XMLHttp);
        return (
            <Provider store={store}>
                <Router>
                    <AppLayout isMyLoading={store.getState().XMLHttp.pageLoadingVal} />
                </Router>
            </Provider>
        );
    }
}

export default AppContainer