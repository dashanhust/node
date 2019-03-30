// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;


/**
 * 读取学生成绩路由
 */

 var express = require('express');
 var db = require('../db/db');
 var router = express.Router();

 router.get('/', function (req, res, next) {
   var mysqlQuery = 'select * from student';
   db.DBConnection.query(mysqlQuery, function (err, rows, fields) {
     if (err) {
       console.err('db query err: ', err);
       return false;
     }
     res.render('user', {students: rows});
   })
 });

 module.exports = router;