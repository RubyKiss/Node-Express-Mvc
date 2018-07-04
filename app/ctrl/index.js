
module.exports.ctrl=function(mvc)
{
    this.index=function(req,res){
        res.render(mvc.defView,{data:mvc.defMod.getData()});
    }
}