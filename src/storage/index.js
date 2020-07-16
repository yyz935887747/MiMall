/*

*  Storage 封装

*/



// 定义大的key,调度mall
const STORAGE_KEY = 'mall'

export default{
//   存储值
 setItem(key,value,module_name){
     if(module_name){
        let val = this.getItem(module.name);
          val[key] = value;
          this.setItem(module_name,val);
      } else{
        let val = this.getStroage();
        val[key] = value;
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));
      }
 },

 // 获取某一个模块下面的信息user下面的username
getItem(key,module_name){
    // this.getStroage()---获取整个stroage信息  getStroage()[key]--获取的user字段信息  key--nsername module_name--user
    if(module_name){
        let val = this.getItem(module_name) ;
        if(val)  return val[key]
    }
   return  this.getStroage()[key]
},

// 获取整个流浪器的环境信息，这个是统一放在mall里面的
getStroage(){
    //这是它的api
 return JSON.parse( window.sessionStorage.getItem(STORAGE_KEY)||'{}');
},
// 
clear(key,module_name){
    let val  = this.getStroage();
     if(module_name){
         if(!val[module_name]) return
         delete val[module_name][key];
     }else{
         delete val[key];
     }

     window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));
}
}