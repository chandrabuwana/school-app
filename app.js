const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs');
var session = require('express-session')

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

const index=require('./routes/index')
const teacher=require('./routes/teacher')
const subject=require('./routes/subject')
const student=require('./routes/student')
const login = require ('./routes/login')

app.use('/',index)
app.use('/login',login)
app.use('/teacher',teacher)
app.use('/subject',subject)
app.use('/student',student)
app.use('/login',login)

app.listen(process.env.PORT||'3000', function () {
  console.log('Example app listening on port 3000!')
})
