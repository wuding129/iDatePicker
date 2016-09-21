/**
 * Created by chuck on 2016/9/20.
 */
const fs = require('fs');
/**
 * fs.exists()在node V6.6文档中指出被弃用可用fs.access代替
 * @param path {string}
 * @return {boolean}
 */
function fsExistsSync(path) {
    try{
        fs.accessSync(path,fs.F_OK);
    }catch(e){
        return false;
    }
    return true;
}
/**
 *
 * @param name {string} 文件夹名称
 */
var mkInitDirs = (name) => {
    // console.log(fsExistsSync('src'));
    if(fsExistsSync('src')){
        fs.mkdir('src/' + name, () => {
            console.log('创建文件夹：'+name);
        })
    } else {
        console.log('src');
        fs.mkdirSync('src');
        fs.mkdir('src/' + name, () => {
            console.log('创建文件夹：'+name);
        })
    }
};
module.exports = mkInitDirs;