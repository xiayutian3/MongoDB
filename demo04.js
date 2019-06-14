// db.workmate.update({sex:1},{$set:{money:1000}},false,true);
// var result = db.runCommand({getLastError:1});
// printjson(result);


// db.runCommand({ping:1})


// findAndModify:
var myModify={
  findAndModify:'workmate',
  query:{name:'JSPang'},
  update:{$set:{age:18}},
  // fields:{age:''},
  new:true
}
var result = db.runCommand(myModify)
printjson(result);


