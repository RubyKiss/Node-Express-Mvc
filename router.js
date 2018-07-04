var mvc_module=require('./mvc');
var config=require('./config').config;
module.exports.route=function(app) //app is express obj
{
    app.get('/',function(req,res){
        var app_module=new mvc_module.mvc('app'); //加载APP MVC框架
        app_module.defCtrl.index(req,res); //执行APP MVC框架的CTRL的index方法
        //res.render(app_module.defView);
    });
};