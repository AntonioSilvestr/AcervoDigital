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



router.get('/', function (req, res, next) {


  res.render('cadastro');
});

router.post('/', async (req, res) => {
    
  const { email, username, senha, ConfirmSenha } = req.body;

  const hashedPassword = require('../crypts')(senha);

  if (
    senha === ConfirmSenha ||
    username !== '' ||
    email !== '' ||
    senha !== '' ||
    ConfirmSenha !== ''
  ) {
    try {
      const checked = await checkUser(email);
      if (checked) {
        res.sendStatus(404);
      } else {
        
        await register(email, username, hashedPassword);
        res.sendStatus(202);
      }
    } catch (err) {
        res.sendStatus(404);
      console.error(err);
    }
  } 
});

async function register(email, username, hashedPassword) {
  const connection = await pool.getConnection();
  try {
    await connection.query('INSERT INTO users (username, email, senha) VALUES (?, ?, ?)', [username, email, hashedPassword]);
    console.log('Novo usuário cadastrado');
  } finally {
    connection.release();
  }
}

async function checkUser(email) {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows.length > 0;
  } finally {
    connection.release();
  }
}

module.exports = router;
