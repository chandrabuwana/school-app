const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })
app.set('view engine', 'ejs');

const index=require('./routes/index')
const teacher=require('./routes/teacher')
const subject=require('./routes/subject')
const student=require('./routes/student')

app.use('/',index)
app.use('/teacher',teacher)
app.use('/subject',subject)
app.use('/student',student)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
