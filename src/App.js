import React, { Component } from 'react'
import { HashRouter } from "react-router-dom";
import Header from './components/Header';
import Body from './components/Body'

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Header />
                    <Body />
                </div>
            </HashRouter>
        )
    }
}
