//生成随机数

function getRandomNum(min,max){
  let range = max-min;   //得到随机数区间
  let rand = Math.random();      //得到随机值
  return (min+Math.round(rand*range));  //最小值+随机数取整
}

// console.log(getRandomNum(10000,99999))

//生成随机用户名
function getRandomUserName(min,max){
  let temStringArray = '123456789qwertyuiopasdfghjklzxcvbnm'.split('');
  let outPuttxet = '';
  //进行循环，随机生产用户名的长度，这里需要生成随机数方法的配合
  for(let i=0;i<getRandomNum(min,max);i++){
    outPuttxet+=temStringArray[getRandomNum(0,temStringArray.length)]
  }
  return outPuttxet;
}

// console.log(getRandomUserName(7,16))




var startTime = new Date().getTime();
var db = connect('company');
// db.randomInfo.drop();
var tempInfo = [];
for(let i=0;i<2000000;i++){
  tempInfo.push({
    username:getRandomUserName(7,16),
    regeditTime: new Date(),
    randNum0:getRandomNum(100000,999999),
    randNum1:getRandomNum(100000,999999),
    randNum2:getRandomNum(100000,999999),
    randNum3:getRandomNum(100000,999999),
    randNum4:getRandomNum(100000,999999),
    randNum5:getRandomNum(100000,999999),
    randNum6:getRandomNum(100000,999999),
    randNum7:getRandomNum(100000,999999),
    randNum8:getRandomNum(100000,999999),
    randNum9:getRandomNum(100000,999999)
  })
}
db.randomInfo.insert(tempInfo);
var disTime = new Date().getTime()-startTime;

print('spent '+disTime+' ms')
