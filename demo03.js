// var workmate={
//   name:'MinJie',
//   age:20,
//   sex:0,
//   job:'UI设计',
//   skill:{
//       skillOne:'PhotoShop',
//       SkillTwo:'UI',
//       SkillThree:'Word+Excel+PPT'
//   },
//   regeditTime:new Date()

// }

var db = connect('company')

// db.workmate.update({name:'MinJie'},workmate)

//$set(修改,没有就增加)
// db.workmate.update({name:'MinJie'},{$set:{sex:10,age:24}})
// db.workmate.update({name:'MinJie'},{$set:{"skill.SkillThree":'work'}})
// db.workmate.update({name:'MinJie'},{$set:{hobby:'eat'}})

// $unset(删除)
// db.workmate.update({name:'MinJie'},{$unset:{age:''}})
// db.workmate.update({name:'MinJie'},{$set:{age:21}})

//$inc(数字加减)
// db.workmate.update({name:'MinJie'},{$inc:{age:-1}})

//multi(所有)
// db.workmate.update({},{$set:{interset:[]}},{multi:true})

//upsert(没有就加上)
// db.workmate.update({name:'xiaowang'},{$set:{age:25}},{upsert:true})





//$push(数组添加)
// db.workmate.update({name:'xiaowang'},{$push:{interset:'draw'}})
// db.workmate.update({name:'MinJie'},{$push:{"skill.skillFour":'draw'}})

//$ne(有则不添加，没有就添加)
// db.workmate.update({name:'xiaowang',interset:{$ne:'playgame'}},{$push:{interset:'xxx'}})

//$addToSet(有则不添加，没有就添加  升级版)
// db.workmate.update({name:'xiaowang'},{$addToSet:{interset:'readbook'}})

// $each(批量追加)
// var newinterests = ['sing','dance','code'];
// db.workmate.update({name:'xiaowang'},{$addToSet:{interset:{$each:newinterests}}})


//$pop (数组) 1从末端进行删除  -1从开始位置进行删除
// db.workmate.update({name:'xiaowang'},{$pop:{interset:1}})
// db.workmate.update({name:'xiaowang'},{$pop:{interset:-1}})

//数组的定位修改
db.workmate.update({name:'xiaowang'},{$set:{"interset.2":'code'}})


print('[SUCCESS]: The data was inserted successfully')