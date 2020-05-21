const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3002
const db = require('./queries')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', db.getStudents)
app.get('/:id', db.getStudentsByID)
app.post('/', db.postGradesOrRegister)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
