// hasNext()

// 可以加载文件，自动执行里边的代码

var db = connect('company');
var result = db.workmate.find();

// while(result.hasNext()){
//   printjson(result.next())
// }

result.forEach(item => {
  printjson(item)
});
