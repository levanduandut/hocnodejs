const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  var a = 1;
  var b =2;
  var c = a + b;
  res.send(' chào các bạn')
})

app.listen(port, () => {
  console.log(`Example app listening on port at http://localhost:${port}`)
})