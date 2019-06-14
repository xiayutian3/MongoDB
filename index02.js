var startTime = new Date().getTime();
var db = connect('company');
var rs = db.randomInfo.find({username:'crmly93l'});

rs.forEach(res=>{
  printjson(res)
})

var disTime = new Date().getTime() - startTime;
print('spent '+disTime+' ms')



//建立索引
// db.randomInfo.ensureIndex({username:1})


//查看当前有的索引
// db.randomInfo.getIndexes()
