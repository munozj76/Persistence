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


app.get('/', db.getAllStudents)
app.get('/:id', db.getStudentsByID)




// app.post('/users', db.createUser)
// app.put('/users/:id', db.updateUser)
// app.delete('/users/:id', db.deleteUser)

// app.get('/', (request, response) => {
//     response.json({ info: 'Node.js, Express, and Postgres API' })
//   })

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
