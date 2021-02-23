const http=require('http');
const compose =require('./compose');
class Application {
     middleware=[];
    listen(...arg){
        const app = http.createServer(this.callback());
       return app.listen(...arg);
    }
    use(middleware){
        this.middleware.push(middleware);
    }
    callback(){
        const fn = compose(this.middleware);
        const handleResponse=(req,res)=>{
            return this.handleRequest(req,fn);
        }
        return handleResponse;
    }
    handleRequest(ctx,middleware){
        middleware(ctx).then().catch();
    }
}
module.exports= Application;