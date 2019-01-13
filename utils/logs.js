// 封装console含颜色的功能
const chalk = require('chalk');

const color = {
    // 错误：红色加粗
    error: chalk.bold.red,
    // 警告：橘黄色
    warning: chalk.keyword('orange'),
    // 成功：绿色
    success: chalk.green
};

module.exports = function log(str, type) {
    console.log(type && color[type]  ? color[type](str) : str);
}
