/* GET home page. */

// 配置页面
exports.index=function (req, res, next) {
    res.render('index', { title: 'myApp' });
}
