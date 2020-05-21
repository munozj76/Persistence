const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'public',
  password: 'pa$$w0rd123',
  port: 5432,
})

//gets student by ID
const getStudentsByID = (req, res) => {
    pool.query('Select * from Grades WHERE ID = ' + req.params.id, (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  }

//get students by id, name or all
const getStudents = (req, res) => {
    if(req.query.id)
    {
        pool.query('Select "Grade" from Grades WHERE ID = ' + req.params.id, (error, results) => {
            if (error) {
            throw error
            }
            res.status(200).json(results.rows)
        })
    }
    else if(req.query.name)
    {
        pool.query('Select * from Grades WHERE Name LIKE "%' + req.query.name + '%"', (error, results) => {
            if (error) {
              throw error
            }
            res.status(200).json(results.rows)
        })
    }
    else
    {
        pool.query('Select * from Grades', (error, results) => {
            if (error) {
              throw error
            }
            res.status(200).json(results.rows)
        })
    }
}

//posts student's grade or register
router.post('/', function(req, res){
    if(req.query.grade)
    {
        if(req.query.id)
        {
            pool.query('INSERT INTO Grades("Name", "ID", "Grade") VALUES (' 
            + req.query.name + ', ' 
            + req.query.id + ', ' 
            + req.query.grade + ')', (error, results) => {
            if (error) {
              throw error
            }
            result = {
                "status": "success",
                "message": "The grade has been successfully added"}
                res.status(200).json(results.rows)
          })
        }
        else
       {
           result = {
               "status": "failed",
               "message": "The grade has not been added"
           }
           res.status(400);
       }
    }
    else if(req.query.username)
    {
        if(req.query.email)
        {
            pool.query('INSERT INTO Register("Username", "Email") VALUES (' 
            + req.query.username + ', ' 
            + req.query.email + ')', (error, results) => {
            if (error) {
              throw error
            }
            result = {
                "status": "success",
                "message": "The grade has been successfully added"}
                res.status(200).json(results.rows)
          })
        }
        else
        {
           result = {
               "status": "failed",
               "message": "You did not registered"
           }
           res.status(400);
        }
    }
    else
    {
       result = {
           "status": "failed",
           "message": "Your request cannot be completed"
       }
       res.status(400);
    }
   res.json(result);
});



//Select * from public."Grades
//gets all students
// const getAllStudents = (req, res) => {
//     pool.query('Select * from Grades', (error, results) => {
//       if (error) {
//         throw error
//       }
//       res.status(200).json(results.rows)
//     })
//   }


//Select * from public."Grades" WHERE "Name" LIKE 
//gets students by name
// const getStudentsByName = (req, res) => {
//     pool.query('Select * from Grades WHERE Name LIKE "%' + req.query.name + '%"', (error, results) => {
//       if (error) {
//         throw error
//       }
//       res.status(200).json(results.rows)
//     })
//   }

//Select "Grade" from public."Grades" WHERE "ID" =
//gets grades for student by ID
// const getGradesByID = (req, res) => {
//     pool.query('Select "Grade" from Grades WHERE ID = ' + req.params.id, (error, results) => {
//       if (error) {
//         throw error
//       }
//       res.status(200).json(results.rows)
//     })
//   }
    
// INSERT INTO public."Grades"("Name", "ID", "Grade") VALUES (' 
//adds grades for student
// const addGrades = (req, res) => {
//     if(req.query.name && req.query.grade && req.query.id)
//     {
//         pool.query('INSERT INTO Grades("Name", "ID", "Grade") VALUES (' 
//             + req.query.name + ', ' 
//             + req.query.id + ', ' 
//             + req.query.grade + ')', (error, results) => {
//             if (error) {
//               throw error
//             }
//             result = {
//                 "status": "success",
//                 "message": "The grade has been successfully added"}
//                 res.status(200).json(results.rows)
//           })
//     }
//     else
//     {
//         result = {
//             "status": "failed",
//             "message": "The grade has not been added"
//         }
//         res.status(400);
//     }
//   }

// //registers new users
// const addRegistration = (req, res) => {
//     if(req.query.username && req.query.email)
//     {
//         pool.query('INSERT INTO Register("Username", "Email") VALUES (' 
//         + req.query.username + ', ' 
//         + req.query.email + ')', (error, results) => {
//         if (error) {
//           throw error
//         }
//         result = {
//             "status": "success",
//             "message": "The grade has been successfully added"}
//             res.status(200).json(results.rows)
//       })
//     }
//     else
//     {
//         result = {
//             "status": "failed",
//             "message": "You did not registered"
//         }
//         res.status(400);
//     }
//   }
