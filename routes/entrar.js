const express = require('express');
const router = express.Router();
const mysql = require('mysql2/promise');
const getHashedPassword = require('../crypts');

const pool = mysql.createPool({
  host: 'containers-us-west-10.railway.app',
  port: 7964,
  user: 'root',
  password: 'sHtb1xhhOtufgFccVcGm',
  database: 'railway',
});

router.get('/', (req, res, next) => {
  res.render('entrar');
});

router.post('/', async (req, res) => {
  const { email, senha } = req.body;
  const hashedPassword = require('../crypts')(senha);

  try {
    const user = await login(email, hashedPassword);
    if (user) {
      res.redirect('/home');
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
});

async function login(email, senha) {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(`SELECT * FROM users WHERE email = ? AND senha = ?;`, [email, senha]);
    
    if (rows.length > 0) {
      return rows[0];
    } else {
      return null;
    }
  } finally {
    connection.release();
  }
}

module.exports = router;
