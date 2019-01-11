var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// 设置模板解析引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// morgan HTTP请求日志记录器中间件
app.use(logger('dev'));


/*
 * node 请求体提取中间件
 */

// parse application/json  以json传入
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded  以form形式传入
app.use(bodyParser.urlencoded({ extended: false }));

// cookie-parser 的作用就是设置，获取和删除 cookie
app.use(cookieParser());

// 静态资源加载
app.use(express.static(path.join(__dirname, 'public')));

// 路由path 对应不同的处理逻辑
app.use('/', routes);
app.use('/users', users);

// 捕获404错误
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// 错误处理
// 除非在开发环境中，否则不会向用户泄漏错误堆栈
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: (app.get('env') === 'development') ? err : {}
    });
});


module.exports = app;
