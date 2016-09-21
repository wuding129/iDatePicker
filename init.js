/**
 * Created by WuDing on 2016/9/20.
 */
const fs = require('fs');
/**
 *
 * @type {readInit}
 */
const fread = require('./utils/readInit');
/**
 *
 * @type {mkInitDirs}
 */
const mkdir = require('./utils/mkdir');

const initOptions = {
    "dir" : ["js","html","css","fonts","images"],
    "file" : {
        "index":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

</body>
</html>`
    }
};

// var oInitData = JSON.parse(fread('init.json'));
var aDirList = initOptions.dir || [];

var initDir = () => {
    // for (var i, len = aDirList.length; i < len; i++){
    //     // mkdir(name);
    //     console.log(i);
    // }
    aDirList.forEach(function (v) {
        mkdir(v);
    });
    fs.writeFile('src/index.html', initOptions.file.index,  function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("数据写入成功！");
        console.log("--------我是分割线-------------");
        console.log("读取写入的数据！");
        fs.readFile('src/index.html', function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log("异步读取文件数据: " + data.toString());
        });
    });
};
initDir();