'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(__filename);
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.js')[env];
var db = {};

if (config.use_env_variable) { // 如果config的某项有use_env_variable键
    var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else { // 没有use_env_variable键
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
}


// 将返回一个包含“指定目录下所有文件名称”对象组成的数组  同步读取
fs
    .readdirSync(__dirname)
    .filter(file => {
        // 返回除了basename的文件对象 数组
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        var model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model; // 给db对象拓展 key为name  value为model对象
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) { // 如果对象db下有associate 属性，那么执行associate()连接功能
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
