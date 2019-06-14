var userName = "jspang";
var timeStamp = Date.parse(new Date());
var jsonDatabase = {'loginUser':userName,'loginTime':timeStamp};
var db = connect('log')//链接数据库
db.login.insert({jsonDatabase})
print('[demo] log print success') 