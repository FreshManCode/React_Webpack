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
    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <Router>
                    <AppLayout />
                </Router>
            </Provider>
        );
    }
}

export default AppContainer