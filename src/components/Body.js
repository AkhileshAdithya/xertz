import React, { Component } from 'react'
import { Route, Switch } from "react-router";
import Blog from './Blog'
import AllBooks from './AllBooks'
import TopBooks from './TopBooks'
import Review from './Review'


export default class Body extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Blog} />
                <Route path="/all" exact component={AllBooks} />
                <Route path="/top" exact component={TopBooks} />
                <Route path="/book/:slug" exact component={Review} />
            </Switch>
        )
    }
}
