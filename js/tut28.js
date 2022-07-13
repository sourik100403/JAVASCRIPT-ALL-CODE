console.log("tut28");
let obj={
    name:"sourik",
    channel:'sourikweb',
    subcribe:180
}
function obj1(nname,nchannel,nsubcribe)
{
    this.name=nname;
    this.channel=nchannel;
    this.subcribe=nsubcribe;
}
obj1.prototype.getname=function(){
    return this.name;
}
obj1.prototype.setname=function(newname){
    this.name=newname;
}
let obj2=new obj1("smritikan","beauty skin",500);
console.log(obj2);
console.log(obj2.setname('pritikana'));
console.log(obj2);