//新建用户
db.createUser({
  user:'jspang',
  pwd:'123456',
  customData:{
    name:'技术胖',
    email:'web0123@126.com',
    age:18
  },
  roles:[
    'read',
    {
      role:'readWrite',
      db:'company'
    }
  ]
})



//先进入admin 才能查找
// db.system.users.find()

// 删除用户
// db.system.users.remove({user:'jspang})

// 建权：
// db.auth("jspang","123456")

// 启动建权
// mongod --auth

// 登录
// mongom  -u jspang -p 123456 127.0.0.1:27017/admin