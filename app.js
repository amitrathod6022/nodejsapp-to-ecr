//Load express module with `require` directive
var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/',  (req, res)=> {
  res.send('Hello World!')
})

//Launch listening server on port 8081
app.listen(3100, ()=> {
  console.log('app listening on port 3100!')
})