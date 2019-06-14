var db = connect('company');
db.info.insert({contextInfo:"I am a programmer, I love life, love family. Every day after work, I write a diary."})
db.info.insert({contextInfo:"I am a programmer, I love PlayGame, love drink. Every day after work, I playGame and drink."})

//简建立索引
db.info.ensureIndex({contextInfo:'text'})
db.info.find({$text:{$search:'programmer love PlayGame'}})   //不是and的关系，是or的关系      

db.info.find({$text:{$search:'programmer love PlayGame -drink'}})   // (-drink):  屏蔽

db.info.find({$text:{$search:'\"love PlayGame\"'}})     //查找两个单词 (转义符 \"\" )  