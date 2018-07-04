var config=require('./config').config;
module.exports.mvc=function(module)
{
    this.ctrl_path='./'+module+'/ctrl';
    this.mod_path='./'+module+"/mod";
    this.view_path='./'+module+"/view";

    var dc=require('./'+module+"/ctrl/index").ctrl;
    this.defCtrl=new dc(this); //默认ctrl对象

    var dm=require('./'+module+"/mod/index").mod;
    this.defMod=new dm(this); //默认mod对象

    this.defView='./'+module+"/view/index"+config.ext; //默认view路径

    this.Ctrl=function(ctrl) //获取指定模块下的ctrl的对象
    {
        var m=require(this.ctrl_path+"/"+ctrl).ctrl
        return new m(this);
    }
    this.Mod=function(mod) //获取指定模块下的mod的对象
    {
        var m=require(this.mod_path+"/"+ctrl).mod
        return new m(this);
    }
    this.View=function(view) //获取指定模块下的view的完整路径
    {
        return this.mod_path+"/"+view+config.ext;
    }
}