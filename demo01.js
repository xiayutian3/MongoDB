var startTime = (new Date()).getTime();
var db = connect('log');

// for(var i=0;i<1000;i++){
//   db.test.insert({num:1});      // runTime is277ms
// }

var tempArray = [];                //runTime is 11ms
for(let i=0;i<1000;i++){
  tempArray.push({num:1})
}
db.test.insert(tempArray)

var runTime = (new Date()).getTime()-startTime;
print('runTime is '+runTime+'ms' )