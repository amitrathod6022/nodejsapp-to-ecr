//Load express module with `require` directive
var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/',  (req, res)=> {
  res.send('Hello World!')
})

//Launch listening server on port 3200 ok
app.listen(3200, ()=> {
  console.log('app listening right now on port 3200!')
  console.log('hello friends')
})
