const express = require('express')
var morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))

app.get('/', (req, res) => {
  var a = 1;
  var b =2;
  var c = a + b;
  res.send(' <h1 style="color: aquamarine;">Hello Word</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port at http://localhost:${port}`)
})