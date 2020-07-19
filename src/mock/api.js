import Mock from 'mockjs'

// Mock 语法：Mock.mock(给前端的请求地址,{结果}})
Mock.mock('/api/user/login',{
    "status":0,
     "data":{
      "id":12,
      "username":"zhangsan",
      "email":"admin@514511.com",
      "phone":null,
      "role":0,
      "createTime":1479048325000,
      "updataTime":1479048324000
    }
})