import React from 'react';
import {createBrowserHistory} from 'history';
import { Router } from '../react-router';

 export default class BrowserRouter extends React.Component{
     history=createBrowserHistory();
     render(){
        return  <Router history={this.history} children={this.props.children} />;
    }
}