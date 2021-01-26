import React from 'react';
import {createHashHistory} from 'history';
import { Router } from '../react-router';

 export default class BrowserRouter extends React.Component{
     history=createHashHistory();
     render(){
        return  <Router history={this.history} children={this.props.children} />;
    }
}