const Koa = require('./koa/application');
const app = new Koa();
app.use((ctx,next)=>{
    console.log("第一个中间件执行");    
});

// 第二个中间件
app.use((ctx,next)=>{
    console.log("第二个中间件");
})

let r = app.listen(8081);
console.log("server run on 8081");