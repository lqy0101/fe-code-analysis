import React from 'react';
import { RouterContext } from '../react-router';

 class Link extends React.Component{
     handleClick(event,history){
        event.preventDefault();
        history.push(this.props.to);
     }
    render(){
        const {...rest}=this.props;
        return  <RouterContext.Consumer>
            {context=>{
             return    <a {...rest} onClick={event => this.handleClick(event, context.history)} />
            }}
        </RouterContext.Consumer>;
    }
}
export default Link;