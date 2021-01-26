import React from 'react';
import RouterContext from './RouterContext';
class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: props?.history.location
          };
          props.history.listen(location=>{
              this.setState({
                  location
              })
          })
    }
    static computeRootMatch(pathname) {
        return {
            path: "/",
            url: "/",
            params: {},
            isExact: pathname === "/"
        };
    }
    render() {
        console.log("router",this.props.history)
        
        return <RouterContext.Provider
        children = {
            this.props.children || null
        }
        value = {
            {
                history: this.props.history,
                location:this.state.location,
                match:Router.computeRootMatch(this.state.location?.pathname),

            }
        }
        >
            
        </RouterContext.Provider>
    }
}
export default Router;