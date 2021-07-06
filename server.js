// var http =  require('http')

// http.createServer(
//     function(request, responce){
//         responce.writeHead(200, {'content-type' : 'text/html'})
//         responce.end('<b>hello world</b>')
//     }
// ).listen(2000)

const { response } = require('express')
const express = require('express')
const app = express()
/*
CRUD-create read update delete
GET-read
POST-create
PUT-update
DELETE-delete
*/
app.get("/",function(req,res){

   
        const persons = [
            {
                id: 1,
                name: "Scott",
                age: 45,
                skill: 'React'
            },
            {
                id: 2,
                name: "Adam",
                age: 43,
                skill: 'Angular'
            },
            {
                id: 3,
                name: "Tuan",
                age: 41,
                skill: 'C#'
            },
            {
                id: 4,
                name: "Uma",
                age: 39,
                skill: 'JavaScript'
            }
        ]
    
    res.json({data: persons
        // message: 'hello guys this is your first api'
    })

})

const PORT =4321

app.listen(PORT, ()=>{
    console.log('server is listnening to port ${PORT}')
})

