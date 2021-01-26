const  matchPath=(pathname,options={})=>{
console.log('matchPath',pathname,options);
if(pathname.pathname===options.path) return true;
return false;
}
export default matchPath;