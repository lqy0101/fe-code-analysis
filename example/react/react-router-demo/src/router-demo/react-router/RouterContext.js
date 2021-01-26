import React from 'react';
const createRouterNamedContext= (name)=>{
     const context=React.createContext(); 
     context.Provider.displayName=`${name}.Provider`;
     context.Consumer.displayName=`${name}.Consumer`;
     return context;
 }
 const context=createRouterNamedContext('Router');
 export default context;