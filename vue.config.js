
module.exports = {
   devServer : {
     host:'localhost', 
     port:8080,
     proxy:{
         '/api':{
            target: "http://mall-pre.springboot.cn",
        // 主机头是否改为目标的url地址 
            changeOrigin:true,
            // 转发地址
            pathRewrite:{
                '/api':''
            }
         }
     }
   }
}