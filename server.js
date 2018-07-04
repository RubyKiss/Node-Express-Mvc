//packer
var express=require('express'); //epxres框架
var router=require('./router'); //路由文件
var ejs=require('ejs'); //指定文件使用ejs渲染数据出来，存粹JS代码用<%= 输出 %><% JS代码 %>
var multer=require('multer'); //文件上传操作
var bodyparser=require('body-parser'); //获取post数据

//app
var app=new express();
var upload=multer({dest:'./'}); //设置默认上传保存临时文件的文件夹

app.engine('html',ejs.renderFile); //使用EJS数据渲染引擎
app.use(bodyparser.json()); //使用bodyparser扩展
app.use(bodyparser.urlencoded({extended:true})); //使用bodyparser扩展
app.set("views","./"); //设置视图文件存放位置

router.route(app);

app.listen(80);
console.log('run at 80');