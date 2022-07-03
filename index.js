const mysql = require('mysql'); // we hebben dingen nodig
const session = require('express-session');
const path = require('path');
const express = require('express')
const app = express()
const port = 3000
<<<<<<< Updated upstream
=======
const bodyParser = require('body-parser');

const connection = mysql.createConnection({
	host     : '192.168.193.136',
	user     : 'root',
	password : 'ohditiseveneenmoeilijke',
	database : 'nodelogin'
});

>>>>>>> Stashed changes

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`http://localhost:${port}`)
})