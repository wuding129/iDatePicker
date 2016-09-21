/**
 * Created by chuck on 2016/9/20.
 */
const fs = require('fs');

/**
 *
 * @param path {String} 文件路径
 * @return {String}
 */
var readInit = (path) => {
    return fs.readFileSync(path, 'utf8', (err, data) => {
        if (err) throw err;
        return data
    });
};
module.exports = readInit;
