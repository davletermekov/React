var express = require('express');
var router = express.Router();7
const { Pool } = require('pg');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'Exemple',
  user: 'postgres',
  password: 'postgres',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})


router.get('/', function(req, res, next) {
  res.render('index.hbs', { title: 'Express' });
});

/* GET home page. */
router.get('/getlist', function(req, res, next) {
	pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack)
    }
    client.query(`SELECT * FROM stud `,
      (err, result) => {
        release()
        if (err) {
          return console.error('Error executing query', err.stack)
        }

      
        res.send(result.rows);
      });
      })

});
module.exports = router;
