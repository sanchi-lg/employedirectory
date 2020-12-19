var express = require('express')
var app = express()
var fs = require('fs')
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
var employees = require('./emp.json').employees
console.log(employees);

app.listen(9000, () => {
    console.log("server started");
})



app.post("/addemp", (req, res) => {
    var length = employees.length
    var date = (new Date()).getDate() + "-" + (new Date()).getMonth() + "-" + (new Date()).getFullYear()
    employees.push({ id: length, ename: req.body.name, eemail: req.body.email, eposition: req.body.position, esalary: req.body.salary, eage: req.body.age, edateofjoining: date })

    fs.writeFile("./emp.json", JSON.stringify({ "employees": employees }), (err) => {
        if (err) {
            res.json({ "mssg": "something went wrong" })
        }
        else {
            res.json({ "mssg": "employee is added successfully" })

        }
    })

})

app.get("/getemp", (req, res) => {
    res.json(employees)
})


app.get("/getempbyid/:v", (req, res) => {
    let id = req.params.id
    res.json(employees[id])

})
