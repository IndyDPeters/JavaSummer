const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const mysql = require('mysql');
var pageName = app.get("/:name", (req, res) => {});

app.post('/:pageName',(req, res) => {
 res.send('page ' + req.params.pageName + ' was not found')
});

app.post('/', (req, res) => {
  res.json(req.body);
});


app.use(express.json());

app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html');
});

app.get('/secondPage', (req, res) => {
  res.sendFile(__dirname + '/static/secondPage.html');
});

app.get("/:name", (req, res) => {
  res.send("Your name is " + req.params.name + "\n");
});

app.post('/', (req, res) => {
  res.json(req.body);
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`http://localhost:${port}`)
})

