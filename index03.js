var startTime = new Date().getTime();
var db = connect('company');

var rs = db.randomInfo.find({username:'crmly93l',randNum0:805480,}).hint({randNum0:1});

rs.forEach(res=>{
  printjson(res)
})

var disTime = new Date().getTime() - startTime;
print('spent '+disTime+' ms')


//删除索引 (当的是name的值)
// db.randomInfo.dropIndex('randNum0_1')