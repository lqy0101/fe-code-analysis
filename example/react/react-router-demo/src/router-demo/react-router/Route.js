import React from 'react';
import RouterContext from './RouterContext';
import matchPath from './matchPath';
class Route extends React.Component{
    render(){
        return <RouterContext.Consumer>
            {context=>{
                const match=matchPath(context.location,this.props);
                return match?this.props.children:null;
            }}
        </RouterContext.Consumer>
    }
}
export default Route;