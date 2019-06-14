// db.workmate.find(
//   {'skill.skillOne':'HTML+CSS'},
//   {name:1,'skill.skillOne':1,_id:0}
// )
 //{name:true,'skill.skillOne':true,_id:false}


//  db.workmate.find(
//   {age:{$lte:30,$gte:25}},
//   {name:1,'skill.skillOne':1,_id:0,age:1}
// )


// var startDate = new Date('01/01/2018');
// db.workmate.find(
//   {regeditTime:{$gt:startDate}},
//   {name:1,'skill.skillOne':1,_id:0,age:1}
// )



//$in 一个key多value
//$nin  
//  db.workmate.find(
//   {age:{$in:[25,30,33]}},
//   {name:1,'skill.skillOne':1,_id:0,age:1}
// )


//$or   ||
//$and
// db.workmate.find(
//   {
//     $or:[
//       {age:{$gte:30}},
//       {'skill.skillThree':'PHP'}
//     ]
//   },
//   {name:1,'skill.skillThree':1,_id:0,age:1}
// )



//$not
// db.workmate.find({
//   age:{
//     $not:{
//       $lte:30,
//       $gte:20
//     }
//   }
// },
//   {name:1,_id:0,age:1}
// )









// ['1','2']  1  2  要完全匹配
// db.workmate.find({interest:['画画','聚会','看电影']},
// {name:true,age:true,interest:true,_id:false}
// )

//查询到会画画的人
// db.workmate.find({interest:'画画'},
// {name:true,age:true,interest:true,_id:false}
// )


// $all  相反  $or
// 即喜欢看电影又喜欢看书（有两者）
db.workmate.find({interest:{$all:['看电影','看书']}},
{name:true,age:true,interest:true,_id:false}
)

// $in
// 喜欢看电影或者喜欢看书（满足其中之一）
db.workmate.find({interest:{$in:['看电影','看书']}},
{name:true,age:true,interest:true,_id:false}
)

// $size  (个数)
db.workmate.find({interest:{$size:5}},
{name:true,age:true,interest:true,_id:false}
)

// { "name" : "JSPang", "age" : 33, "interest" : [ "看电影", "看书", "吃美食", "钓鱼", "旅游" ] }
// $slice(数组里边选择显示的个数) (1,2 ... -1) -1是最后一项  
db.workmate.find({interest:{$size:5}},
  {name:true,age:true,interest:{$slice:1},_id:false}    //{ "name" : "JSPang", "age" : 33, "interest" : [ "看电影" ] }
  )

db.workmate.find({interest:{$size:5}},
  {name:true,age:true,interest:{$slice:2},_id:false}      //{ "name" : "JSPang", "age" : 33, "interest" : [ "看电影", "看书" ] }
  )

  // 显示第一项到第二项(用数组方式：下标从0开始)
db.workmate.find({interest:{$size:5}},  
  {name:true,age:true,interest:{$slice:[1,2]},_id:false}   //{ "name" : "JSPang", "age" : 33, "interest" : [ "看书", "吃美食" ] }
  )






//sort  1(从小到大)  -1(从大到小)
//分页 显示2个  年龄从大到小
db.workmate.find(
  {},
  {name:1,age:1,_id:0}
).limit(2).skip(2).sort({age:1})


//$where  (功能强大，但不安全，对服务器压力增大)
db.workmate.find(
  {$where:'this.age>30'},
  {name:1,age:1,_id:0}
)