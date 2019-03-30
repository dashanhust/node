// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;


/**
 * 修改成满足student工程的情况
 */

 var express = require('express');
 var db = require('../db/db');
 var router = express.Router();

 router.get('/', function (req, res, next) {
  res.render('index');
 });

router.post('/', function (req, res, next) {
  var mysqlParams = [
    req.body.name,
    req.body.chinese,
    req.body.english,
    req.body.math
  ];
  var mysqlQuery = 'INSERT student(name, chinese, english, math) VALUES(?,?,?,?)';
  db.DBConnection.query(mysqlQuery, mysqlParams, function (err, rows, fields) {
    var result;

    if (err) {
      console.error('db insert error: ', err);
      result = {
        result: false,
        message: '新增失败：' + err.sqlMessage
      };
    } else {
      result = {
        result: true,
        message: '新增成功'
      };
    }

    res.send(result);
  });
});

 module.exports = router;
 