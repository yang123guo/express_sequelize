var models = require('../models');
var express = require('express');
var router = express.Router();


// index模块的处理逻辑
router.get('/', function (req, res) {
    models.User.findAll({
        include: [models.Task]
    }).then(function (users) {
        res.render('index', {
            title: 'Sequelize: Express Example',
            users: users
        });
    });
});

module.exports = router;
